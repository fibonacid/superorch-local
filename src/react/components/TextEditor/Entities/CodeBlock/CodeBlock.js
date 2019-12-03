import React, { useEffect, useRef } from "react";
import { lowerCasedProps } from "../../../../utils/common";
import gsap, { Power1 } from "gsap";

/**
 *
 * @param el
 */
function blink(el) {
  let timeline = gsap.timeline();
  timeline.set(el, {
    backgroundColor: `rgb(255, 134, 31)`,
    duration: 0.0
  });
  timeline.to(el, {
    backgroundColor: `rgba(255, 205, 16, 0.3)`,
    ease: Power1.easeIn,
    duration: 0.3
  });
}

/**
 *
 * @param props
 * @returns {*}
 * @constructor
 */
function CodeBlockEntity(props) {
  // Get data
  const { entityKey, contentState } = props;
  const { data } = contentState.getEntity(entityKey);

  const containerRef = useRef();

  // Every time the execution command is invoked
  useEffect(() => {
    // Launch animation
    blink(containerRef.current);
  }, [data.times]);

  //console.log("execute:", props.decoratedText);

  return (
    <span ref={containerRef} {...lowerCasedProps(props)}>
      {props.children}
      {/*<span style={{
        verticalAlign: "super",
        fontSize: "12px"
      }}>
        k{entityKey}-{data.times}
      </span>*/}
    </span>
  );
}

export default CodeBlockEntity;
