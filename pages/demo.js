import Link from "next/link";
import React from "react";

const PdfFileGenerate = ({ data }) => {
    const linked = [1, 2];

    return (
        <section className="">
            {/* header part */}
            <div
                style={{
                    backgroundColor: "#CD1E05",
                    color: "#fff",
                    paddingLeft: "10px",
                    paddingRight: "10px",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: "15px",
                        paddingTop: "5px",
                    }}
                >
                    <span>Dynamic user name</span>
                    <span>Taxants</span>
                </div>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: "13px",
                        paddingTop: "15px",
                    }}
                >
                    <span>Province Name</span>
                    <span>https://taxants.tk/</span>
                </div>

                {/* logo */}
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <img
                        src="/images/logo-new.png"
                        alt=""
                        style={{ width: "70px" }}
                    />
                </div>

                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        fontSize: "13px",
                        paddingTop: "13px",
                    }}
                >
                    <div style={{ lineHeight: 0.5, marginTop: "15px" }}>
                        <p>Submission Date : </p>
                        <p>Payment Status : </p>
                    </div>

                    <div
                        style={{
                            lineHeight: 0.5,
                            marginTop: "15px",
                            textAlign: "end",
                        }}
                    >
                        <p>Westwood Square, 205 Goreway Dr,</p>
                        <p>Mississauga,7 Ontario L4T 2V1,</p>
                        <p>Canada</p>
                    </div>
                </div>
            </div>

            {/* data container */}
            <div className="px-3 my-4">
                <h6 style={{ fontWeight: 600 }}>
                    Student Tax File #Dynamic_File_Id
                </h6>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "15px",
                    }}
                >
                    {/* left side code */}
                    <div className="">
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr 1fr",
                                paddingLeft: "8px",
                                paddingTop: "4px",
                                paddingDown: "4px",
                                marginBottom: "3px",
                            }}
                        >
                            <span>ID</span>
                            <span></span>
                            <span>1440</span>
                        </div>
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr 1fr",
                                paddingLeft: "8px",
                                paddingTop: "4px",
                                paddingDown: "4px",
                                backgroundColor: "#f1f1f1",
                                marginBottom: "3px",
                            }}
                        >
                            <span>First Name</span>
                            <span></span>
                            <span>1440</span>
                        </div>
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr 1fr",
                                paddingLeft: "8px",
                                paddingTop: "4px",
                                paddingDown: "4px",
                                marginBottom: "3px",
                            }}
                        >
                            <span>Middle Name</span>
                            <span></span>
                            <span>1440</span>
                        </div>
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr 1fr",
                                paddingLeft: "8px",
                                paddingTop: "4px",
                                paddingDown: "4px",
                                backgroundColor: "#f1f1f1",
                                marginBottom: "3px",
                            }}
                        >
                            <span>Last Name</span>
                            <span></span>
                            <span>1440</span>
                        </div>
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr 1fr",
                                paddingLeft: "8px",
                                paddingTop: "4px",
                                paddingDown: "4px",
                                marginBottom: "3px",
                            }}
                        >
                            <span>College Attending</span>
                            <span></span>
                            <span>1440</span>
                        </div>
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr 1fr",
                                paddingLeft: "8px",
                                paddingTop: "4px",
                                paddingDown: "4px",
                                backgroundColor: "#f1f1f1",
                                marginBottom: "3px",
                            }}
                        >
                            <span>T2202A</span>
                            <span></span>
                            <span>1440</span>
                        </div>
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr 1fr",
                                paddingLeft: "8px",
                                paddingTop: "4px",
                                paddingDown: "4px",
                                marginBottom: "3px",
                            }}
                        >
                            <span>First Time Tax</span>
                            <span></span>
                            <span>1440</span>
                        </div>
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr 1fr",
                                paddingLeft: "8px",
                                paddingTop: "4px",
                                paddingDown: "4px",
                                backgroundColor: "#f1f1f1",
                                marginBottom: "3px",
                            }}
                        >
                            <span>Landed Year</span>
                            <span></span>
                            <span>1440</span>
                        </div>
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr 1fr",
                                paddingLeft: "8px",
                                paddingTop: "4px",
                                paddingDown: "4px",
                                marginBottom: "3px",
                            }}
                        >
                            <span>Notice Of Assessment</span>
                            <span></span>
                            <span>1440</span>
                        </div>
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr 1fr",
                                paddingLeft: "8px",
                                paddingTop: "4px",
                                paddingDown: "4px",
                                backgroundColor: "#f1f1f1",
                                marginBottom: "3px",
                            }}
                        >
                            <span>Date Of Birth</span>
                            <span></span>
                            <span>1440</span>
                        </div>
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr 1fr",
                                paddingLeft: "8px",
                                paddingTop: "4px",
                                paddingDown: "4px",
                                marginBottom: "3px",
                            }}
                        >
                            <span>Social Insurance No.</span>
                            <span></span>
                            <span>1440</span>
                        </div>
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr 1fr",
                                paddingLeft: "8px",
                                paddingTop: "4px",
                                paddingDown: "4px",
                                backgroundColor: "#f1f1f1",
                                marginBottom: "3px",
                            }}
                        >
                            <span>Address</span>
                            <span></span>
                            <span>1440</span>
                        </div>
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr 1fr",
                                paddingLeft: "8px",
                                paddingTop: "4px",
                                paddingDown: "4px",
                                marginBottom: "3px",
                            }}
                        >
                            <span>City</span>
                            <span></span>
                            <span>1440</span>
                        </div>
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr 1fr",
                                paddingLeft: "8px",
                                paddingTop: "4px",
                                paddingDown: "4px",
                                backgroundColor: "#f1f1f1",
                                marginBottom: "3px",
                            }}
                        >
                            <span>Postal Code</span>
                            <span></span>
                            <span>1440</span>
                        </div>
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr 1fr",
                                paddingLeft: "8px",
                                paddingTop: "4px",
                                paddingDown: "4px",
                                marginBottom: "3px",
                            }}
                        >
                            <span>Province</span>
                            <span></span>
                            <span>1440</span>
                        </div>
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr 1fr",
                                paddingLeft: "8px",
                                paddingTop: "4px",
                                paddingDown: "4px",
                                backgroundColor: "#f1f1f1",
                                marginBottom: "3px",
                            }}
                        >
                            <span>Assigned</span>
                            <span></span>
                            <span>1440</span>
                        </div>
                    </div>

                    {/* left side code */}
                    <div className="">
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                                paddingLeft: "8px",
                                paddingTop: "4px",
                                paddingDown: "4px",
                                marginBottom: "3px",
                            }}
                        >
                            <span className="">Payment</span>
                            <span className="ml-2">1440</span>
                        </div>
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                                paddingLeft: "8px",
                                paddingTop: "4px",
                                paddingDown: "4px",
                                backgroundColor: "#f1f1f1",
                                marginBottom: "3px",
                            }}
                        >
                            <span className="">Marital Status</span>
                            <span className="ml-2">1440</span>
                        </div>
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                                paddingLeft: "8px",
                                paddingTop: "4px",
                                paddingDown: "4px",
                                marginBottom: "3px",
                            }}
                        >
                            <span className="">Partner F Name</span>
                            <span className="ml-2">1440</span>
                        </div>
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                                paddingLeft: "8px",
                                paddingTop: "4px",
                                paddingDown: "4px",
                                backgroundColor: "#f1f1f1",
                                marginBottom: "3px",
                            }}
                        >
                            <span className="">Partner L Name</span>
                            <span className="ml-2">1440</span>
                        </div>
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                                paddingLeft: "8px",
                                paddingTop: "4px",
                                paddingDown: "4px",
                                marginBottom: "3px",
                            }}
                        >
                            <span className="">Partner Dob</span>
                            <span className="ml-2">1440</span>
                        </div>
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                                paddingLeft: "8px",
                                paddingTop: "4px",
                                paddingDown: "4px",
                                backgroundColor: "#f1f1f1",
                                marginBottom: "3px",
                            }}
                        >
                            <span className="">Partner SIN</span>
                            <span className="ml-2">1440</span>
                        </div>
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                                paddingLeft: "8px",
                                paddingTop: "4px",
                                paddingDown: "4px",
                                marginBottom: "3px",
                            }}
                        >
                            <span className="">Work This Year</span>
                            <span className="ml-2">1440</span>
                        </div>
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                                paddingLeft: "8px",
                                paddingTop: "4px",
                                paddingDown: "4px",
                                backgroundColor: "#f1f1f1",
                                marginBottom: "3px",
                            }}
                        >
                            <span className="">T4s</span>
                            <span className="ml-2">
                                {linked?.map((data) => (
                                    <span key={data} className="ml-1">
                                        <Link href={`https://google.com`}>
                                            <a className="text-purple-600">
                                                view
                                            </a>
                                        </Link>
                                    </span>
                                ))}
                            </span>
                        </div>
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                                paddingLeft: "8px",
                                paddingTop: "4px",
                                paddingDown: "4px",
                                marginBottom: "3px",
                            }}
                        >
                            <span className="">Paying Rent</span>
                            <span className="ml-2">1440</span>
                        </div>
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                                paddingLeft: "8px",
                                paddingTop: "4px",
                                paddingDown: "4px",
                                backgroundColor: "#f1f1f1",
                                marginBottom: "3px",
                            }}
                        >
                            <span className="">Last Yr. Rent Paid</span>
                            <span className="ml-2">1440</span>
                        </div>
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                                paddingLeft: "8px",
                                paddingTop: "4px",
                                paddingDown: "4px",
                                marginBottom: "3px",
                            }}
                        >
                            <span className="">Rent Receipts</span>
                            <span className="ml-2">1440</span>
                        </div>
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                                paddingLeft: "8px",
                                paddingTop: "4px",
                                paddingDown: "4px",
                                backgroundColor: "#f1f1f1",
                                marginBottom: "3px",
                            }}
                        >
                            <span className="">Time To Call</span>
                            <span className="ml-2">1440</span>
                        </div>
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                                paddingLeft: "8px",
                                paddingTop: "4px",
                                paddingDown: "4px",
                                marginBottom: "3px",
                            }}
                        >
                            <span className="">Phone Number</span>
                            <span className="ml-2">1440</span>
                        </div>
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                                paddingLeft: "8px",
                                paddingTop: "4px",
                                paddingDown: "4px",
                                backgroundColor: "#f1f1f1",
                                marginBottom: "3px",
                            }}
                        >
                            <span className="">Digital Signature</span>
                            <span className="ml-2">1440</span>
                        </div>
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                                paddingLeft: "8px",
                                paddingTop: "4px",
                                paddingDown: "4px",
                                marginBottom: "3px",
                            }}
                        >
                            <span className="">Direct Deposit Form</span>
                            <span className="ml-2">1440</span>
                        </div>
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                                paddingLeft: "8px",
                                paddingTop: "4px",
                                paddingDown: "4px",
                                backgroundColor: "#f1f1f1",
                                marginBottom: "3px",
                            }}
                        >
                            <span className="">Last Updated</span>
                            <span className="ml-2">1440</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* footer */}
            <div
                style={{
                    backgroundColor: "#CD1E05",
                    color: "#fff",
                    paddingLeft: "10px",
                    paddingRight: "10px",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    display: "flex",
                    justifyContent: "space-around",
                    marginTop: "30px",
                }}
            >
                <span>© 2022 Taxants - All Rights Reserved.</span>
                <span>Let us File your Tax!</span>
            </div>
        </section>
    );
};

export default PdfFileGenerate;
