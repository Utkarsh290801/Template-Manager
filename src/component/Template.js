// import React, { useEffect, useState } from "react";
// import "grapesjs/dist/css/grapes.min.css";
// import "grapesjs/dist/grapes.min.js";
// import grapesjs from "grapesjs";
// import gsWebpage from "grapesjs-preset-webpage";
// import gsCustome from "grapesjs-custom-code";
// import "grapesjs-preset-webpage/dist";
// import gsTap from "grapesjs-tabs";
// import Basics from "grapesjs-blocks-basic";
// import BaseReactComponent from "./base-react-component";
// import app_config from "../config";
// import { useNavigate, useParams } from "react-router-dom";

// const Template = () => {
//   const navigate = useNavigate();
//   const url = app_config.backend_url;
//   const [pluginLoaded, setPluginLoaded] = useState(false);
//   const [editor, setEditor] = useState(null);
//   const [webpageData, setWebpageData] = useState(null);
//   let e;
//   const [currentUser, setCurrentUser] = useState(
//     JSON.parse(sessionStorage.getItem("user"))
//   );
//   const saveToDB = async () => {

//     console.log(editor.getProjectData());
//     const response = await fetch(url + "/webpage/update/" + webpageData._id, {
//       method: "PUT",
//       body: JSON.stringify({
//         data: {
//           html: editor.getHtml(),
//           css: editor.getCss(),
//           js: editor.getJs(),
//           editorData: editor.getProjectData()
//         },
//       }),
//       headers: { "Content-Type": "application/json" },
//     });

//     console.log(response.status);
//     if (response.status === 200) {
//       const data = await response.json();
//       console.log(data);
//     }
//     // };
//   };

//   const fetchPageData = async () => {
//     const res = await fetch(url + "/webpage/getbyuser/" + currentUser._id);
//     console.log(res.status);
//     const data = await res.json();
//     console.log(data);
//     setWebpageData(data);

//     // setPage(data);
//     // setPageHTML(data.data.html);
//     // setPageCSS(data.data.css);
//   };

//   useEffect(() => {
//     // fetchPageData();
//   }, [])
  

//   useEffect(() => {
    
//     if (!pluginLoaded) {
//       // addTablePlugin();
//       // addChartPlugin();
//       setPluginLoaded(true);
//     } else if (!editor) {
//       e = grapesjs.init({
//         // color:'white',
//         height: "100vh",
//         width: "auto",
//         container: "#gjs",
//         fromElement: true,
//         plugins: [gsWebpage, gsCustome, gsTap, Basics, BaseReactComponent],
//         storageManager: {
//           id: "gjs-",
//           type: "local",
//           urlStore:
//             "http://173.249.14.149:3001/api/Dashboards/5ef370de14213070188a41eb/grapes?access_token=B6IES26pZSvpX4J8c8q4wmseASpRtmBOtvXzztH57NDDJXxO94qE7VbtJ7y718GZ",
//           urlLoad:
//             "http://173.249.14.149:3001/api/Dashboards/5ef370de14213070188a41eb/grapes?access_token=B6IES26pZSvpX4J8c8q4wmseASpRtmBOtvXzztH57NDDJXxO94qE7VbtJ7y718GZ",
//           // autosave: true,
//           // autoload: true,
//           contentTypeJson: true,
//           storeComponents: true,
//           allowScripts: 1,
//           storeStyles: true,
//           storeHtml: true,
//           storeCss: true,
//         },
//         pluginsOpts: {
//           "grapesjs-preset-webpage": {
    
//             blockManager: {
//               appendTo: ".myblocks",

//               blocks: [
//                 {
//                   id: "section", // id is mandatory
//                   label: "<b>Section</b>", // You can use HTML/SVG inside labels
//                   attributes: { class: "gjs-block-section" },
//                   content: `<section>
//                       <h1>This is a simple title</h1>
//                       <div>This is just a Lorem text: Lorem ipsum dolor sit amet</div>
//                     </section>`,
//                 },
//                 {
//                   id: "text",
//                   label: "Text",
//                   content:
//                     '<div data-gjs-type="text">Insert your text here</div>',
//                 },
//                 {
//                   id: "image",
//                   label: "Image",
//                   // Select the component once it's dropped
//                   media: `<svg style="width:24px;height:24px" viewBox="0 0 24 24">
//                 <path d="M8.5,13.5L11,16.5L14.5,12L19,18H5M21,19V5C21,3.89 20.1,3 19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19Z" />
//             </svg>`,
//                   select: true,
//                   // You can pass components as a JSON instead of a simple HTML string,
//                   // in this case we also use a defined component type `image`
//                   content: { type: "image" },
//                   // This triggers `active` event on dropped components and the `image`
//                   // reacts by opening the AssetManager
//                   activate: true,
//                 },
//               ],
//             },
//           },
//         },
//       });
//       fetch(url + "/webpage/getbyuser/" + currentUser._id)
//         .then((res) => res.json())
//         .then((webpage) => {
//           console.log(webpage);
//           setWebpageData(webpage);
//           if (webpage.editorData) e.loadProjectData(webpage.editorData);
//           setEditor(e);
//           });
//     }
//   });

//   return (
//     <div>
//       {Boolean(webpageData) && (
//         <a
//           className="btn btn-link"
//           target="_blank"
//           href={"/live/" + webpageData._id}
//         >
//           Visit Live Page
//         </a>
//       )}

//       <button className="btn btn-primary" onClick={saveToDB}>
//         Save
//       </button>
//       <div id="gjs" className="h"></div>
//       <div id="blocks"></div>
//     </div>
//   );
// };

// export default Template;
