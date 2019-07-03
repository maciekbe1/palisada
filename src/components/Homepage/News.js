import React, { useState } from "react";
import { Document, Page } from "react-pdf";

export default function News() {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const onDocumentLoadSuccess = numPages => {
        setPageNumber(numPages);
    };
    return (
        <div>
            <h2>Aktualności</h2>
            <div class="row">
                <div class="col-4">
                    <div class="list-group" id="list-tab" role="tablist">
                        <a
                            class="list-group-item list-group-item-action active"
                            id="list-home-list"
                            data-toggle="list"
                            href="#list-home"
                            role="tab"
                            aria-controls="home"
                        >
                            Home
                        </a>
                        <a
                            class="list-group-item list-group-item-action"
                            id="list-profile-list"
                            data-toggle="list"
                            href="#list-profile"
                            role="tab"
                            aria-controls="profile"
                        >
                            Profile
                        </a>
                        <a
                            class="list-group-item list-group-item-action"
                            id="list-messages-list"
                            data-toggle="list"
                            href="#list-messages"
                            role="tab"
                            aria-controls="messages"
                        >
                            Messages
                        </a>
                        <a
                            class="list-group-item list-group-item-action"
                            id="list-settings-list"
                            data-toggle="list"
                            href="#list-settings"
                            role="tab"
                            aria-controls="settings"
                        >
                            Settings
                        </a>
                    </div>
                </div>
                <div class="col-8">
                    <div class="tab-content" id="nav-tabContent">
                        <div
                            class="tab-pane fade show active"
                            id="list-home"
                            role="tabpanel"
                            aria-labelledby="list-home-list"
                        >
                            <div>
                                <Document
                                    file="../../assets/doc/doc.pdf"
                                    onLoadSuccess={onDocumentLoadSuccess}
                                >
                                    <Page pageNumber={pageNumber} />
                                </Document>
                                <p>
                                    Page {pageNumber} of {numPages}
                                </p>
                            </div>
                        </div>
                        <div
                            class="tab-pane fade"
                            id="list-profile"
                            role="tabpanel"
                            aria-labelledby="list-profile-list"
                        >
                            ...
                        </div>
                        <div
                            class="tab-pane fade"
                            id="list-messages"
                            role="tabpanel"
                            aria-labelledby="list-messages-list"
                        >
                            ...
                        </div>
                        <div
                            class="tab-pane fade"
                            id="list-settings"
                            role="tabpanel"
                            aria-labelledby="list-settings-list"
                        >
                            ...
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
