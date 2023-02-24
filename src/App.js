import React, { useEffect } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "./styles.css";
import "./App.css";

const PDFJS = window.pdfjsLib;

export default function App() {
  const [pdf, setPdf] = React.useState("");
  const [width, setWidth] = React.useState(0);
  const [images, setImages] = React.useState([]);
  const [height, setHeight] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [pdfRendering, setPdfRendering] = React.useState();
  const [pageRendering, setPageRendering] = React.useState("");


  const url =
  "http://localhost:3000/pitch.pdf"   

  // const url =
  //  "https://drive.google.com/drive/my-drive"  
     
  

  async function showPdf(event) {
    try {
      setPdfRendering(true);
      var _PDF_DOC = await PDFJS.getDocument({ url: url });
      setPdf(_PDF_DOC);
      setPdfRendering(false);
      document.getElementById("file-to-upload").value = "";
    } catch (error) {
      console.log(error)
    }
  }

  function changePage() {
    setCurrentPage();
  }

  async function renderPage() {
    setPageRendering(true);
    const imagesList = [];
    const canvas = document.createElement("canvas");
    canvas.setAttribute("className", "canv");
    let canv = document.querySelector(".canv");

    for (let i = 1; i <= pdf.numPages; i++) {
      var page = await pdf.getPage(i);
      var viewport = page.getViewport({ scale: 1 });
      canvas.height = viewport.height;
      canvas.width = viewport.width;
      var render_context = {
        canvasContext: canvas.getContext("2d"),
        viewport: viewport,
      };
      console.log("page lenght", pdf.numPages);
      setWidth(viewport.width);
      setHeight(viewport.height);
      await page.render(render_context).promise;
      let img = canvas.toDataURL("image/png");
      imagesList.push(img);
    }
    setImages(imagesList);
    setPageRendering(false);
  }

  useEffect(() => {
    pdf && renderPage();
    // eslint-disable-next-line
  }, [pdf, currentPage]);

  useEffect(() => {}, []);

  const styles = {
    wrapper: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "5px",
    },
    imageWrapper: {
      border: "1px solid rgba(0,0,0,0.15)",
      borderRadius: "3px",
      boxShadow: "0 2px 5px 0 rgba(0,0,0,0.25)",
      padding: "0",
    },
  };

  const handleNext = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrev = () => {
    setCurrentPage(currentPage - 1);
  };
  
  useEffect(()=>{
    showPdf()
  },[])
  return (
    <div className="App">
      <div className="container">
      <div className="main">
      {/* <button
          id="upload-button"
          // onClick={() => document.getElementById("file-to-upload").click()}
          onClick={showPdf}
        >
          Select PDF
        </button> */}
        {/* <input
          type="file"
          id="file-to-upload"
          accept="application/pdf"
          hidden
          onChange={showPdf}
        /> */}
      {/* <Document
        file={pdfFile}
        onLoadSuccess={showPdf}
        >
        <Page pageNumber={ pdf.numPages} />
      </Document> */}
     </div>
        
        <div id="pdf-main-container">
          <div id="pdf-loader" hidden={!pdfRendering}>
            Loading document ...
          </div>

          <div id="pdf-contents">
            <div id="image-convas-row">
              <div className="main_cont">
                <FaArrowAltCircleLeft
                  className="left-arrow"
                  id="pdf-prev"
                  onClick={handlePrev}
                  style={{
                    display: currentPage === 1 ? "none" : "block",
                  }}
                />
                <FaArrowAltCircleRight
                  className="right-arrow"
                  id="pdf-next"
                  onClick={handleNext}
                  style={{
                    display:
                      currentPage >= pdf.numPages - 3 ? "none" : "block",
                  }}
                />
                {/* slide 1 */}
                <div className="img_cont">
                  {images.map((image, index) => (
                    <div
                      key={index}
                      style={{
                        display: index === currentPage - 2 ? "block" : "none",
                        width: "100%",
                        height: "150px",
                        margin: "0",
                        border: "1px solid black",
                        boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
                        opacity: "0.2",
                      }}
                    >
                      <img
                        src={image}
                        alt="PDF page"
                        style={{ height: "150px" }}
                      />
                    </div>
                  ))}
                </div>

                {/* main screen slide 2*/}
                <div className="img_cont">
                  {images.map((image, index) => (
                    <div
                      key={index}
                      style={{
                        display: index === currentPage - 1 ? "block" : "none",
                        width: "100%",
                        height: "350px",
                        margin: "0",
                        border: "1px solid black",
                        boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
                        zIndex: "1",
                      }}
                    >
                      <img
                        src={image}
                        alt="PDF page"
                        style={{ height: "350px" }}
                      />
                    </div>
                  ))}
                </div>
                {/* slide 3 */}
                <div className="img_cont">
                  {images.map((image, index) => (
                    <div
                      key={index}
                      style={{
                        display: index === currentPage + 0 ? "block" : "none",
                        width: "100%",
                        height: "150px",
                        margin: "0",
                        border: "1px solid black",
                        boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",
                        opacity: "0.2",
                      }}
                    >
                      <img
                        src={image}
                        alt="PDF page"
                        style={{ height: "150px" }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
             { `Total pages `+ pdf.numPages }

            {/* <div id="page-loader" hidden={!pageRendering}>
              Loading page ... Page {currentPage} of{" "}
              <div id="pdf-total-pages">{pdf.numPages}</div>
            </div> */}
          </div>
        </div>
      </div>


      {/* small screen slide container */}
      <div className="main_small_cont">
        {/* small screen slide 1 */}
        <div>
          {
            <div className="templet_small">
              {images.map((image, index) => (
                <div
                  key={index}
                  style={{
                    display: index === currentPage - 1 ? "block" : "none",
                    width: "100%",
                    height: "100%",
                    padding: "5px 10px",
                  }}
                  className="cont_image"
                >
                  <img
                    id="image-generated"
                    src={image}
                    alt="pdfImage"
                    style={{
                      width: "100%",
                      height: "100%",
                      margin: "0",
                      border: "1px solid black",
                    }}
                  />
                  {currentPage}
                </div>
              ))}
            </div>
          }
        </div>
        {/* small screen slide 2 */}
        <div>
          {
            <div className="templet_small">
              {images.map((image, index) => (
                <div
                  key={index}
                  style={{
                    display: index === currentPage ? "block" : "none",
                    width: "100%",
                    height: "100%",
                    padding: "5px 10px",
                  }}
                >
                  <img
                    id="image-generated"
                    src={image}
                    alt="pdfImage"
                    style={{
                      width: "100%",
                      height: "100%",
                      margin: "0",
                      border: "1px solid black",
                    }}
                  />
                  {currentPage+1}
                </div>
              ))}
            </div>
          }
        </div>
        {/* small screen slide 3 */}
        <div>
          {
            <div className="templet_small">
              {images.map((image, index) => (
                <div
                  key={index}
                  style={{
                    display: index === currentPage + 1 ? "block" : "none",
                    width: "100%",
                    height: "100%",
                    padding: "5px 10px",
                  }}
                >
                  <img
                    id="image-generated"
                    src={image}
                    alt="pdfImage"
                    style={{
                      width: "100%",
                      height: "100%",
                      margin: "0",
                      border: "1px solid black",
                    }}
                  />
                  {currentPage+2}
                </div>
              ))}
            </div>
          }
        </div>
        {/* small screen slide 4 */}
        <div>
          {
            <div className="templet_small">
              {images.map((image, index) => (
                <div
                  key={index}
                  style={{
                    display: index === currentPage + 2 ? "block" : "none",
                    width: "100%",
                    height: "100%",
                    padding: "5px 10px",
                  }}
                >
                  <img
                    id="image-generated"
                    src={image}
                    alt="pdfImage"
                    style={{
                      width: "100%",
                      height: "100%",
                      margin: "0",
                      border: "1px solid black",
                    }}
                  />
                  {currentPage+3} 
                </div>
              ))}
            </div>
          }
        </div>
      </div>
    </div>
  );
}
