import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { NotificationItem, chainNameType } from "@pushprotocol/uiweb";
import { HuddleIframe, huddleIframeApp } from "@huddle01/huddle01-iframe";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const notifications = [
  {
    cta: "Mint Now!",
    title: "Couch",
    message: "Checkout the new Couch available to mint!",
    app: "Openverse",
    icon: "https://img.freepik.com/3d-models/LJFPRZE3-vr-glasses-001/vr-glasses-001-beauty.png",
    image:
      "https://mir-s3-cdn-cf.behance.net/project_modules/1400/2fcf7240768139.578cd8ff73b03.jpg",
    url: "https://example.com/news",
  },
  {
    cta: "Mint Now!",
    title: "Lamp",
    message: "Checkout the new Lamp available to mint!",
    app: "Openverse",
    icon: "https://img.freepik.com/3d-models/LJFPRZE3-vr-glasses-001/vr-glasses-001-beauty.png",
    image:
      "https://unblast.com/wp-content/uploads/2020/03/Boja-Pendant-Lamp-3D-Model.jpg",
    url: "https://example.com/app-update",
  },
  {
    cta: "Mint Now!",
    title: "Chandelier",
    message: "Checkout the new Chandelier available to mint!",
    app: "Openverse",
    icon: "https://img.freepik.com/3d-models/LJFPRZE3-vr-glasses-001/vr-glasses-001-beauty.png",
    image: "https://3dbrute.com/wp-content/uploads/full/2022/07/13.jpg",
    url: "https://example.com/blockchain-event",
  },
  {
    cta: "Mint Now!",
    title: "Piano",
    message: "Checkout the new Piano available to mint!",
    app: "Openverse",
    icon: "https://img.freepik.com/3d-models/LJFPRZE3-vr-glasses-001/vr-glasses-001-beauty.png",
    image:
      "https://3dzip.org/wp-content/uploads/2022/04/556.-Free-3D-Piano-Model-Download.jpg",
    url: "https://example.com/onboarding",
  },
];

const iframeConfig = {
  roomUrl: "https://iframe.huddle01.com/vth-ylsu-tlm",
  height: "600px",
  width: "80%",
};

huddleIframeApp.methods.connectWallet(
  "0xd19a12bdE1B768957aab46F9eB1c6B9F498c32DC"
);

const Push = ({ notifications }) => {
  return (
    <div>
      {notifications.map((oneNotification, i) => {
        const { cta, title, message, app, icon, image, url } = oneNotification;

        return (
          <NotificationItem
            key={i} // any unique id
            notificationTitle={title}
            notificationBody={message}
            cta={cta}
            app={app}
            icon={icon}
            image={image}
            url={url}
            chainName={"ETH_TEST_SEPOLIA"}
          />
        );
      })}
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/push",
    element: <Push notifications={notifications} />,
  },
  {
    path: "/huddle",
    element: <HuddleIframe config={iframeConfig} />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
