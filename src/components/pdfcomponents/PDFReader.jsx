import React, { useState } from 'react';
import Loader from './Loader';
import { Document, Page, pdfjs } from 'react-pdf';
import ControlPanel from './ControlPanel';
import { useDispatch, useSelector } from "react-redux";

pdfjs.GlobalWorkerOptions.workerSrc = `./pdf.worker.js`;

// "/assets/docs/test.pdf"

const PDFReader = () => {
  const [scale, setScale] = useState(1.0);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const { data } = useSelector(state => state.dataReducer);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setIsLoading(false);
  }

  return (
    <div>
      Title: {data.title} <br/>
      Grade: {data.grade} <br/>
      Subject: {data.subject} <br/>
      <Loader isLoading={isLoading} />
      <section
        id="pdf-section"
        className="d-flex flex-column align-items-center w-100"
      >
        <ControlPanel
          scale={scale}
          setScale={setScale}
          numPages={numPages}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
          file={data.filePath}
        />
        <Document
          file={data.filePath}
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} scale={scale} />
        </Document>
      </section>
    </div>
  );
};

export default PDFReader;
