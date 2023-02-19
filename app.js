const huddleIframe = document.getElementById('huddle01-iframe');
huddleIframe.contentWindow.postMessage({ type: 'huddle01-iframe', methodType, methodData }, '*');


import { HuddleIframe } from "@huddle01/huddle01-iframe";
const iframeConfig = {
    roomUrl: "https://iframe.huddle01.com/123",
    height: "600px",
    width: "80%",
    noBorder: false, // false by default
};


<
HuddleIframe config = { iframeConfig }
/>


import { huddleIframeApp, HuddleAppEvent } from "@huddle01/huddle01-iframe";

huddleIframeApp.on("peer-join", (data) => console.log({ data }));