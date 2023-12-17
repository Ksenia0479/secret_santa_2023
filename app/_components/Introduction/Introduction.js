import "./introduction.css";

const Introduction = ({ startGameHandler }) => {
  return (
    <>
      <div
        id="t"
        className="neterror"
        style={{
          fontFamily: "Segoe UI, Tahoma, sans-serif",
          fontSize: "75%",
        }}
        jstcache="0"
      >
        <div
          id="main-frame-error"
          className="interstitial-wrapper"
          jstcache="0"
        >
          <div id="main-content" jstcache="0">
            <div className="icon icon-generic" jstcache="0"></div>
            <div id="main-message" jstcache="0">
              <h1 jstcache="0">
                <span jsselect="heading" jsvalues=".innerHTML:msg" jstcache="9">
                  This site can’t be reached
                </span>
                <a
                  id="error-information-button"
                  className="hidden"
                  jstcache="0"
                ></a>
              </h1>
              <p jsselect="summary" jsvalues=".innerHTML:msg" jstcache="1">
                <strong>Warning!</strong> The page to Christmas gift was blocked
                by the Grinch!
              </p>

              <div id="error-information-popup-container" jstcache="0">
                <div id="error-information-popup" jstcache="0">
                  <div id="error-information-popup-box" jstcache="0">
                    <div id="error-information-popup-content" jstcache="0">
                      <div
                        id="suggestions-list"
                        jsdisplay="(suggestionsSummaryList &amp;&amp; suggestionsSummaryList.length)"
                        jstcache="16"
                      >
                        <p>To unlock the page try:</p>
                        <ul
                          jsvalues=".className:suggestionsSummaryList.length == 1 ? 'single-suggestion' : ''"
                          jstcache="19"
                          className=""
                        >
                          <li
                            jsselect="suggestionsSummaryList"
                            jsvalues=".innerHTML:summary"
                            jstcache="21"
                            jsinstance="0"
                          >
                            To answer 7 questions about some of the most popular
                            board games
                          </li>
                          <li
                            jsselect="suggestionsSummaryList"
                            jsvalues=".innerHTML:summary"
                            jstcache="21"
                            jsinstance="1"
                          >
                            <a href="" jstcache="0">
                              Each question has three answer options. Choose the
                              one that in your opinion is correct
                            </a>
                          </li>
                          <li
                            jsselect="suggestionsSummaryList"
                            jsvalues=".innerHTML:summary"
                            jstcache="21"
                            jsinstance="*2"
                          >
                            <a href="" id="diagnose-link" jstcache="0">
                              After successfully answering all the questions,
                              the page will be unlocked, and you will find out
                              what gift I have prepared for you!
                            </a>
                          </li>
                          <li
                            jsselect="suggestionsSummaryList"
                            jsvalues=".innerHTML:summary"
                            jstcache="21"
                            jsinstance="1"
                          >
                            <a href="" jstcache="0">
                              Before starting, make sure that the full-screen
                              mode is enabled on phone/laptop of all event
                              participants.
                            </a>
                          </li>
                          <li
                            jsselect="suggestionsSummaryList"
                            jsvalues=".innerHTML:summary"
                            jstcache="21"
                            jsinstance="1"
                          >
                            <a href="" jstcache="0">
                              To get started click the "Start" button below!
                              Good luck!
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div
                        className="error-code"
                        jscontent="errorCode"
                        jstcache="17"
                      >
                        ERR_CONNECTION_TIMED_OUT
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="download-links-wrapper" className="hidden" jstcache="0">
                <div id="download-link-wrapper" jstcache="0">
                  <a
                    id="download-link"
                    className="link-button"
                    jsselect="downloadButton"
                    jscontent="msg"
                    jsvalues=".disabledText:disabledMsg"
                    jstcache="6"
                    style={{ display: "none" }}
                  ></a>
                </div>
                <div
                  id="download-link-clicked-wrapper"
                  className="hidden"
                  jstcache="0"
                >
                  <div
                    id="download-link-clicked"
                    className="link-button"
                    jsselect="downloadButton"
                    jscontent="disabledMsg"
                    jstcache="11"
                    style={{ display: "none" }}
                  ></div>
                </div>
              </div>
              <div
                id="save-page-for-later-button"
                className="hidden"
                jstcache="0"
              >
                <a
                  className="link-button"
                  jsselect="savePageLater"
                  jscontent="savePageMsg"
                  jstcache="10"
                  style={{ display: "none" }}
                ></a>
              </div>
              <div
                id="cancel-save-page-button"
                className="hidden"
                jsselect="savePageLater"
                jsvalues=".innerHTML:cancelMsg"
                jstcache="4"
                style={{ display: "none" }}
              ></div>
              <div
                id="offline-content-list"
                className="list-hidden"
                hidden=""
                jstcache="0"
              >
                <div id="offline-content-list-visibility-card" jstcache="0">
                  <div
                    id="offline-content-list-title"
                    jsselect="offlineContentList"
                    jscontent="title"
                    jstcache="12"
                    style={{ display: "none" }}
                  ></div>
                  <div jstcache="0">
                    <div
                      id="offline-content-list-show-text"
                      jsselect="offlineContentList"
                      jscontent="showText"
                      jstcache="14"
                      style={{ display: "none" }}
                    ></div>
                    <div
                      id="offline-content-list-hide-text"
                      jsselect="offlineContentList"
                      jscontent="hideText"
                      jstcache="15"
                      style={{ display: "none" }}
                    ></div>
                  </div>
                </div>
                <div id="offline-content-suggestions" jstcache="0"></div>
                <div id="offline-content-list-action" jstcache="0">
                  <a
                    className="link-button"
                    jsselect="offlineContentList"
                    jscontent="actionText"
                    jstcache="13"
                    style={{ display: "none" }}
                  ></a>
                </div>
              </div>
            </div>
          </div>
          <div id="buttons" className="nav-wrapper suggested-left" jstcache="0">
            <div id="control-buttons" jstcache="0">
              <button
                id="reload-button"
                className="blue-button text-button"
                onClick={startGameHandler}
              >
                Start
              </button>
              <button
                id="download-button"
                className="blue-button text-button"
                jsselect="downloadButton"
                jscontent="msg"
                jsvalues=".disabledText:disabledMsg"
                jstcache="6"
                style={{ display: "none" }}
              ></button>
            </div>
            <button
              id="details-button"
              className="secondary-button text-button small-link"
              jscontent="details"
              jsdisplay="(suggestionsDetails &amp;&amp; suggestionsDetails.length > 0) || diagnose"
              jsvalues=".detailsText:details; .hideDetailsText:hideDetails;"
              jstcache="2"
            >
              Details
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Introduction;
