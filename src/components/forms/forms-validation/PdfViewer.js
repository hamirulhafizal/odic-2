// import * as React from 'react';
// import {
//   PdfViewerComponent,
//   Toolbar,
//   Magnification,
//   Navigation,
//   LinkAnnotation,
//   BookmarkView,
//   ThumbnailView,
//   Print,
//   TextSelection,
//   TextSearch,
//   Annotation,
//   FormFields,
//   FormDesigner,
//   Inject
// } from '@syncfusion/ej2-react-pdfviewer';
// function PdfViewer1() {
//   let viewer;
//   return (
//     <div>
//       <div className="control-section">
//         {/* Render the PDF Viewer */}
//         <PdfViewerComponent
//           ref={(scope) => {
//             viewer = scope;
//           }}
//           id="container"
//           documentPath="http://localhost:3000/PDF_Succinctly.pdf"
//           serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/pdfviewer"
//           documentLoad={documentLoaded}
//           style={{ height: '640px' }}
//         >
//           <Inject
//             services={[
//               Toolbar,
//               Magnification,
//               Navigation,
//               LinkAnnotation,
//               BookmarkView,
//               ThumbnailView,
//               Print,
//               TextSelection,
//               TextSearch,
//               Annotation,
//               FormFields,
//               FormDesigner
//             ]}
//           />
//         </PdfViewerComponent>
//       </div>
//     </div>
//   );
//   function documentLoaded() {
//     viewer.annotationModule.setAnnotationMode('PdfViewer1');
//   }
// }
// export default PdfViewer1;
