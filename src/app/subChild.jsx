"use client";
import React, { useState, useEffect } from "react";
import { useUserContext } from "@/context/context";

const SubChild = ({ data }) => {

    const { user } = useUserContext();
    const [scriptLoaded, setScriptLoaded] = useState(false);
    useEffect(() => {
        let script;

        if (user && !scriptLoaded) {
            script = document.createElement("script");
            script.src = "https://app.wonderchat.io/scripts/wonderchat.js";
            script.setAttribute("data-name", "wonderchat");
            script.setAttribute("data-address", "app.wonderchat.io");
            script.setAttribute("data-id", "clsvcjdfl002zlg22aajxm3e0");
            script.setAttribute("data-widget-size", "normal");
            script.setAttribute("data-widget-button-size", "normal");
            script.async = true;
            script.onload = () => setScriptLoaded(true);
            document.body.appendChild(script);
        }
    }, [user, scriptLoaded]); // Add scriptLoaded to dependencies array


    return (
        <>
            {data}
            {scriptLoaded}
        </>
    );
};

export default SubChild;