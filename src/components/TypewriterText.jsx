"use client";

import { useEffect, useMemo, useRef, useState } from "react";

/**
 * TypewriterText
 * - Hides text until `start` becomes true
 * - Types at a readable pace (speed in ms per char)
 * - Resets when `start` becomes false
 */
export default function TypewriterText({
  text = "",
  start = false,
  speed = 28,
  delay = 0,
  showCursor = true,
  className = "",
  cursorClassName = "",
  as: Tag = "span",
  ...props
}) {
  const normalized = useMemo(() => String(text ?? ""), [text]);
  const [value, setValue] = useState("");
  const [cursor, setCursor] = useState(showCursor);
  const timerRef = useRef(null);
  const delayRef = useRef(null);

  useEffect(() => {
    // cleanup any previous timers
    if (timerRef.current) clearInterval(timerRef.current);
    if (delayRef.current) clearTimeout(delayRef.current);

    if (!start) {
      setValue("");
      setCursor(showCursor);
      return;
    }

    const begin = () => {
      let i = 0;
      timerRef.current = setInterval(() => {
        i += 1;
        setValue(normalized.slice(0, i));
        if (i >= normalized.length) {
          clearInterval(timerRef.current);
          timerRef.current = null;
          setCursor(false);
        }
      }, Math.max(8, speed));
    };

    if (delay > 0) {
      delayRef.current = setTimeout(begin, delay);
    } else {
      begin();
    }

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
      if (delayRef.current) clearTimeout(delayRef.current);
    };
  }, [start, normalized, speed, delay, showCursor]);

  return (
    <Tag
      className={className}
      style={{ whiteSpace: "pre-wrap" }}
      {...props}
    >
      {value}
      {cursor ? (
        <span
          className={cursorClassName}
          aria-hidden="true"
        >
          ▍
        </span>
      ) : null}
    </Tag>
  );
}
