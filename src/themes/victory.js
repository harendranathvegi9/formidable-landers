// -------------------------------
// VICTORY THEME
// -------------------------------
// Settings
import settings from "./victory-settings";

// Stylesheet
export default {
  /*
   * Normalize & Element Selectors
   */
  "*, *:before, *:after": {
    boxSizing: "inherit"
  },
  html: {
    textSizeAdjust: "100%"
  },
  body: {
    backgroundColor: settings.palerSand,
    fontFamily: settings.serif,
    fontSize: "18px",
    lineHeight: 1.4,
    margin: 0,
    color: settings.mud,
    counterReset: "interactive",
    boxSizing: "border-box"
  },
  "html, body": {
    overflowX: "hidden"
  },
  "article, aside, details, figcaption, figure, footer": {
    display: "block"
  },
  "header, hgroup, main, menu, nav, section, summary": {
    display: "block"
  },
  table: {
    borderCollapse: "collapse",
    display: "block",
    overflow: "auto",
    width: "100%"
  },
  "thead, tbody": {
    border: 0,
    margin: 0,
    padding: 0,
    fontSize: "100%"
  },
  thead: {
    font: "inherit",
    verticalAlign: "baseline"
  },
  tbody: {
    verticalAlign: "middle"
  },
  "th, td": {
    border: `1px solid ${settings.paleSand}`,
    padding: "0.425em 0.75em",
    verticalAlign: "top"
  },
  "th code, td code": {
    background: "none",
    color: settings.darkMud
  },
  th: {
    fontWeight: "bold",
    textAlign: "left"
  },
  "h1,h2,h3,h4,h5,h6,hgroup, ul,ol,dd, p,figure, pre,table,fieldset,hr, .highlight": {
    marginTop: settings.gutter,
    marginBottom: 0
  },
  img: {
    maxWidth: "100%"
  },
  "svg, img": {
    fill: "currentColor"
  },
  /*
   * Headlines/Headings
   */
  "h1, h2": {
    marginTop: `${settings.gutter * 2.5}px`,
    fontSize: "40px",
    fontFamily: settings.serifHeadline,
    fontWeight: "normal",
    lineHeight: 1.3,
    textAlign: "center",
    borderBottom: `1px solid ${settings.sand}`
  },
  "h1": {
    color: settings.red,
    textAlign: "left"
  },
  "h3": {
    marginTop: `${settings.gutter * 2}px`,
    fontSize: "0.75em",
    fontFamily: settings.serif,
    fontWeight: "normal",
    lineHeight: 1.5,
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    textAlign: "center"
  },
  "h4, h5, h6": {
    fontSize: "1em",
    fontWeight: "bold",
    textAlign: "left"
  },
  ".Smallcaps": {
    textTransform: "uppercase",
    fontSize: "0.75em",
    fontWeight: "normal",
    letterSpacing: "0.1em",
    paddingRight: "1em"
  },
  /*
   * Links
   */
  "a:link": {
    color: settings.darkMud,
    fontWeight: 700,
    textDecoration: "none",
    borderBottom: `1px solid ${settings.darkMud}`,
    transition: "color 5s cubic-bezier(0.22, 0.61, 0.36, 1), border-bottom 1s ease"
  },
  "a:visited": {
    color: settings.palerMud,
    borderBottom: `1px dotted ${settings.paleSand}`
  },
  "a:hover, a:focus": {
    cursor: "pointer",
    color: settings.red,
    borderBottomColor: settings.red,
    transition: "color 200ms cubic-bezier(0.22, 0.61, 0.36, 1), border-bottom 200ms ease"
  },
  ".Link--unstyled": {
    border: "none",
    boxShadow: "none"
  },
  ".Link--unstyled:hover, .Link--unstyled:focus": {
    border: "none",
    boxShadow: "none"
  },
  /*
   * Buttons!
   */
  ".Button": {
    backgroundColor: "transparent",
    border: `3px solid ${settings.palerSand}`,
    boxShadow: "none",
    color: settings.darkestSand,
    fontFamily: settings.sansSerif,
    fontWeight: "normal",
    padding: "0.75em 1.25em",
    textAlign: "center",
    transition: "color 0.2s ease, border-color 0.7s ease"
  },
  ".Button:hover, .Button:focus": {
    borderColor: settings.palestRed,
    boxShadow: "none",
    color: settings.red,
    outline: "none",
    transition: "color 0.2s ease, border-color 0.7s ease"
  },
  /*
   * Layout/Grid
   */
  ".Container": {
    margin: "0 auto",
    maxWidth: "960px",
    paddingLeft: "1em",
    paddingRight: "1em",
    paddingBottom: "1em"
  },
  /*
   * Ecology
   */
  ".Ecology p, .Ecology h2, .Ecology h3, .Ecology h4, .Ecology h5, .Ecology h6": {
    maxWidth: "760px" // Ideal 60–70 characters per line
  },
  ".Ecology ul": {
    paddingLeft: "24px",
    listStyle: "none"
  },
  ".Ecology ul > li": {
    position: "relative"
  },
  ".Ecology ul > li + li": {
    marginTop: "0.25em"
  },
  ".Ecology ul > li:before": {
    content: "''",
    width: "1em",
    height: "1em",
    display: "block",
    position: "absolute",
    fontSize: "8px",
    borderRadius: "50%",
    border: `1px solid ${settings.red}`,
    left: "-24px",
    top: "11px"
  },
  ".Ecology li > ul": {
    marginTop: "0.25em",
    marginBottom: "0px"
  },
  ".Ecology code, .Home code": {
    background: settings.palestSand,
    borderRadius: 3,
    color: settings.mud,
    fontFamily: settings.monospace,
    fontSize: "0.85em",
    padding: "0 5px"
  },
  ".highlight code": {
    background: "transparent",
    padding: 0
  },
  /*
   * Ecology README text wrangling
   */
  ".Overview h1:first-child": {
    marginTop: 0,
    borderBottom: 0
  },
  ".Overview pre": {
    overflow: "hidden" // Hide horizontal scrollbars for playgrounds.
  },
  ".Overview pre code": { // Non-ecology code blocks
    display: "block",
    padding: `${settings.gutter}px ${settings.gutter}px`,
    background: settings.mud,
    color: settings.whiteSand,
    fontFamily: settings.monospace,
    border: `1px solid ${settings.palestSand}`
  },
  /*
   * Interactive/Component Playground
   * .Interactive
   * |- .playground
   *    |- .playgroundCode
   *    |- .playgroundPreview
   */
  ".Interactive": {
    minHeight: "300px"  // TODO: Extract for server-side rendering
  },
  ".Interactive .playground": {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    padding: `${settings.gutter}px ${settings.gutter * 0.5}px`
  },
  ".Interactive .playgroundCode": {
    flex: "0 0 100%",
    order: "2",
    padding: `${settings.gutter}px ${settings.gutter}px`,
    backgroundColor: settings.mud,
    color: settings.whiteSand,
    borderLeft: `4px solid ${settings.darkerSand}`,
    borderTop: `4px solid ${settings.darkerSand}`,
    boxShadow:
      `0 0 0 1px ${settings.darkerSand},
       0 0 0 5px ${settings.palerSand},
       0 0 0 6px ${settings.darkerSand},
       -1px 11px 0 0 ${settings.darkerSand},
       11px 11px 0 0 ${settings.darkerSand},
       11px -1px 0 0 ${settings.darkerSand}`
  },
  ".Interactive .playgroundPreview": {
    flex: "0 0 100%",
    order: "1",
    padding: `0 0 ${settings.gutter * 2}px 0`,
    position: "relative",
    marginBottom: "32px",
    textAlign: "center"
  },
  ".Interactive .playgroundPreview:after": {
    counterIncrement: "interactive",
    content: "'Fig. ' counter(interactive) '.'",
    position: "absolute",
    right: 0,
    bottom: 0,
    left: 0,
    color: settings.palerMud,
    fontFamily: settings.serif,
    fontWeight: "normal",
    fontSize: "18px",
    lineHeight: 1,
    textAlign: "center"
  },
  ".Interactive .playgroundError": {
    backgroundColor: settings.paleRed,
    color: settings.whiteSand,
    fontFamily: settings.monospace,
    fontSize: "18px",
    fontWeight: "normal",
    padding: `${settings.gutter}px`
  },
  ".Interactive pre, .CodeMirror-code": {
    fontFamily: settings.monospace,
    fontSize: "18px",
    lineHeight: 1.2
  },
  ".CodeMirror": {
    height: "auto"
  },
  /*
  * Documentation/Props
  */
  ".Documentation": {
    paddingRight: 0,
    paddingLeft: 0
  },
  ".Documentation h1, .Documentation h2, .Documentation h3": {
    fontFamily: settings.serif,
    fontWeight: "normal"
  },
  ".Prop td:first-child": {
    maxWidth: "30em"
  },
  ".Prop-name": {
    fontFamily: settings.monospace
  },
  ".Prop-type": {
    color: settings.darkSand,
    display: "block",
    fontFamily: settings.sansSerif,
    fontStyle: "italic",
    lineHeight: 1.3
  },
  ".Prop-description": {
    display: "block",
    maxWidth: "760px",
    lineHeight: 1.45
  },
  ".Prop-examples, .Prop-default": {
    marginTop: settings.gutter,
    display: "block",
    lineHeight: 1.45
  },
  ".Prop-examples-title, .Prop-default-title": {
    paddingRight: "1em",
    fontFamily: settings.sansSerif,
    fontSize: "0.85em",
    fontWeight: "bold",
    color: settings.darkSand,
    letterSpacing: "0.04em",
    textTransform: "uppercase"
  },
  ".Prop-examples-value": {
    fontFamily: settings.monospace
  },
  ".Prop-default-value": {
    fontFamily: settings.monospace,
    color: settings.paleMud
  },
  /* Utilities */
  ".u-textCenter": {
    textAlign: "center"
  },
  ".u-textLeft": {
    textAlign: "left"
  },
  ".u-textRight": {
    textAlign: "right"
  },
  ".u-marginModule > *:first-child": {
    marginTop: 0
  },
  mediaQueries: {
    [settings.mediaQueries.medium]: {
      body: {
        fontSize: "24px",
        lineHeight: 1.5
      },
      "h1, h2": {
        marginTop: `${settings.gutter * 3}px`,
        fontSize: "48px"
      },
      ".Documentation": {
        paddingRight: `${settings.gutter}px`
      },
      ".Ecology p": {
        fontSize: "24px"
      }
    },
    [settings.mediaQueries.large]: {
      ".Interactive .playground": {
        flexWrap: "nowrap",
        justifyContent: "space-between",
        marginLeft: `${settings.gutter * -1}px`,
        padding: `${settings.gutter * 3}px 0`
      },
      ".Interactive .playgroundCode, .Interactive .playgroundPreview": {
        padding: `${settings.gutter * 2}px ${settings.gutter}px`
      },
      ".Interactive .playgroundCode": {
        display: "flex",
        flex: "1 1 auto",
        marginTop: `${settings.gutter}px`,
        marginRight: `${settings.gutter}px`
      },
      ".Interactive .playgroundPreview": {
        display: "flex",
        flex: "0 1 auto"
      }
    }
  },
  /**
   * Ecology Playground Theme/Color Palette
   */
  ".cm-s-elegant .CodeMirror-gutters": {
    background: `${settings.mud} !important`
  },
  ".cm-s-elegant .CodeMirror-foldgutter-open, .CodeMirror-foldgutter-folded": {
    color: "#999"
  },
  ".cm-s-elegant div.CodeMirror-cursor": {
    borderLeft: "1px solid white !important"
  },
  ".cm-s-elegant": {
    backgroundColor: settings.mud,
    color: "#dcdccc"
  },
  ".cm-s-elegant span.cm-builtin": {
    color: "#dcdccc",
    fontWeight: "bold"
  },
  ".cm-s-elegant span.cm-comment": {
    color: "#7f9f7f"
  },
  ".cm-s-elegant span.cm-keyword": {
    color: "#f0dfaf",
    fontWeight: "bold"
  },
  ".cm-s-elegant span.cm-atom": {
    color: "#bfebbf"
  },
  ".cm-s-elegant span.cm-def": {
    color: "#dcdccc"
  },
  ".cm-s-elegant span.cm-variable": {
    color: settings.palerSand
  },
  ".cm-s-elegant span.cm-variable-2": {
    color: "#dcdccc"
  },
  ".cm-s-elegant span.cm-string": {
    color: settings.whiteSand
  },
  ".cm-s-elegant span.cm-string-2": {
    color: settings.darkerSand
  },
  ".cm-s-elegant span.cm-number": {
    color: settings.whiteSand
  },
  ".cm-s-elegant span.cm-tag": {
    color: "#93e0e3"
  },
  ".cm-s-elegant span.cm-property": {
    color: settings.sand
  },
  ".cm-s-elegant span.cm-attribute": {
    color: "#dfaf8f"
  },
  ".cm-s-elegant span.cm-qualifier": {
    color: "#7cb8bb"
  },
  ".cm-s-elegant span.cm-meta": {
    color: "#f0dfaf"
  },
  ".cm-s-elegant span.cm-header": {
    color: "#f0efd0"
  },
  ".cm-s-elegant span.cm-operator, .CodeMirror pre": {
    color: settings.darkerSand
  },
  ".cm-s-elegant span.CodeMirror-matchingbracket": {
    boxSizing: "border-box",
    background: "transparent",
    borderBottom: "1px solid"
  },
  ".cm-s-elegant span.CodeMirror-nonmatchingbracket": {
    borderBottom: "1px solid",
    background: "none"
  },
  ".cm-s-elegant .CodeMirror-activeline": {
    background: "#000000"
  },
  ".cm-s-elegant .CodeMirror-activeline-background": {
    background: "#000000"
  },
  ".cm-s-elegant div.CodeMirror-selected": {
    background: settings.darkMud
  },
  ".cm-s-elegant .CodeMirror-focused div.CodeMirror-selected": {
    background: settings.paleMud
  }
};
