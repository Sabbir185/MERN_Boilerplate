import React from "react";
import {
    Document,
    Text,
    Page,
    View,
    Image,
    StyleSheet,
    Link,
} from "@react-pdf/renderer/lib/react-pdf.browser.cjs.js";

const styles = StyleSheet.create({
    page: {
        backgroundColor: "#CD1E05",
        color: "#fff",
        paddingLeft: "10px",
        paddingRight: "10px",
        paddingToText: "10px",
        paddingBottom: "10px",
    },
    header_top_flex: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: "15px",
      paddingToText: "5px",
    }
});

// Create Document Component
const MyDocument = () => {
    const linked = [1, 2];

    return (
        <Document>
            <Page size="A4">
                <View>
                    {/* header part */}
                    <View style={styles.page}>
                        <View
                            style={styles.header_top_flex}
                        >
                            <Text>Dynamic user name</Text>
                            <Text>Taxants</Text>
                        </View>

                        <View
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                fontSize: "13px",
                                paddingToText: "15px",
                            }}
                        >
                            <Text>Province Name</Text>
                            <Text>http://taxants.tk/</Text>
                        </View>

                        {/* logo */}
                        <View
                            style={{
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <Image
                                src="/images/logo-new.png"
                                alt=""
                                style={{ width: "70px" }}
                            />
                        </View>

                        <View
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                fontSize: "13px",
                                paddingToText: "13px",
                            }}
                        >
                            <View
                                style={{
                                    lineHeight: 0.5,
                                    marginToText: "15px",
                                }}
                            >
                                <Text>Submission Date : </Text>
                                <Text>Payment Status : </Text>
                            </View>

                            <View
                                style={{
                                    lineHeight: 0.5,
                                    marginToText: "15px",
                                    textAlign: "end",
                                }}
                            >
                                <Text>Westwood Square, 205 Goreway Dr,</Text>
                                <Text>Mississauga,7 Ontario L4T 2V1,</Text>
                                <Text>Canada</Text>
                            </View>
                        </View>
                    </View>

                    {/* data container */}
                    <View
                        className="px-3 my-4"
                        style={{
                            paddingLeft: "12px",
                            paddingRight: "12px",
                            marginTop: "16px",
                            marginBottom: "16px",
                        }}
                    >
                        <Text style={{ fontWeight: 600 }}>
                            Student Tax File #Dynamic_File_Id
                        </Text>

                        <View
                            style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr",
                                gaText: "15px",
                            }}
                        >
                            {/* left side code */}
                            <View>
                                <View
                                    style={{
                                        display: "grid",
                                        gridTemplateColumns: "1fr 1fr 1fr",
                                        paddingLeft: "8px",
                                        paddingTop: "4px",
                                        paddingDown: "4px",
                                        marginBottom: "3px",
                                    }}
                                >
                                    <Text>ID</Text>
                                    <Text></Text>
                                    <Text>1440</Text>
                                </View>
                                <View
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
                                    <Text>First Name</Text>
                                    <Text></Text>
                                    <Text>1440</Text>
                                </View>
                                <View
                                    style={{
                                        display: "grid",
                                        gridTemplateColumns: "1fr 1fr 1fr",
                                        paddingLeft: "8px",
                                        paddingTop: "4px",
                                        paddingDown: "4px",
                                        marginBottom: "3px",
                                    }}
                                >
                                    <Text>Middle Name</Text>
                                    <Text></Text>
                                    <Text>1440</Text>
                                </View>
                                <View
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
                                    <Text>Last Name</Text>
                                    <Text></Text>
                                    <Text>1440</Text>
                                </View>
                                <View
                                    style={{
                                        display: "grid",
                                        gridTemplateColumns: "1fr 1fr 1fr",
                                        paddingLeft: "8px",
                                        paddingTop: "4px",
                                        paddingDown: "4px",
                                        marginBottom: "3px",
                                    }}
                                >
                                    <Text>College Attending</Text>
                                    <Text></Text>
                                    <Text>1440</Text>
                                </View>
                                <View
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
                                    <Text>T2202A</Text>
                                    <Text></Text>
                                    <Text>1440</Text>
                                </View>
                                <View
                                    style={{
                                        display: "grid",
                                        gridTemplateColumns: "1fr 1fr 1fr",
                                        paddingLeft: "8px",
                                        paddingTop: "4px",
                                        paddingDown: "4px",
                                        marginBottom: "3px",
                                    }}
                                >
                                    <Text>First Time Tax</Text>
                                    <Text></Text>
                                    <Text>1440</Text>
                                </View>
                                <View
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
                                    <Text>Landed Year</Text>
                                    <Text></Text>
                                    <Text>1440</Text>
                                </View>
                                <View
                                    style={{
                                        display: "grid",
                                        gridTemplateColumns: "1fr 1fr 1fr",
                                        paddingLeft: "8px",
                                        paddingTop: "4px",
                                        paddingDown: "4px",
                                        marginBottom: "3px",
                                    }}
                                >
                                    <Text>Notice Of Assessment</Text>
                                    <Text></Text>
                                    <Text>1440</Text>
                                </View>
                                <View
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
                                    <Text>Date Of Birth</Text>
                                    <Text></Text>
                                    <Text>1440</Text>
                                </View>
                                <View
                                    style={{
                                        display: "grid",
                                        gridTemplateColumns: "1fr 1fr 1fr",
                                        paddingLeft: "8px",
                                        paddingTop: "4px",
                                        paddingDown: "4px",
                                        marginBottom: "3px",
                                    }}
                                >
                                    <Text>Social Insurance No.</Text>
                                    <Text></Text>
                                    <Text>1440</Text>
                                </View>
                                <View
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
                                    <Text>Address</Text>
                                    <Text></Text>
                                    <Text>1440</Text>
                                </View>
                                <View
                                    style={{
                                        display: "grid",
                                        gridTemplateColumns: "1fr 1fr 1fr",
                                        paddingLeft: "8px",
                                        paddingTop: "4px",
                                        paddingDown: "4px",
                                        marginBottom: "3px",
                                    }}
                                >
                                    <Text>City</Text>
                                    <Text></Text>
                                    <Text>1440</Text>
                                </View>
                                <View
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
                                    <Text>Postal Code</Text>
                                    <Text></Text>
                                    <Text>1440</Text>
                                </View>
                                <View
                                    style={{
                                        display: "grid",
                                        gridTemplateColumns: "1fr 1fr 1fr",
                                        paddingLeft: "8px",
                                        paddingTop: "4px",
                                        paddingDown: "4px",
                                        marginBottom: "3px",
                                    }}
                                >
                                    <Text>Province</Text>
                                    <Text></Text>
                                    <Text>1440</Text>
                                </View>
                                <View
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
                                    <Text>Assigned</Text>
                                    <Text></Text>
                                    <Text>1440</Text>
                                </View>
                            </View>

                            {/* right side code */}
                            <View>
                                <View
                                    style={{
                                        display: "grid",
                                        gridTemplateColumns: "1fr 1fr",
                                        paddingLeft: "8px",
                                        paddingTop: "4px",
                                        paddingDown: "4px",
                                        marginBottom: "3px",
                                    }}
                                >
                                    <Text>Payment</Text>
                                    <Text style={{ marginLeft: "8px" }}>
                                        1440
                                    </Text>
                                </View>
                                <View
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
                                    <Text>Marital Status</Text>
                                    <Text style={{ marginLeft: "8px" }}>
                                        1440
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        display: "grid",
                                        gridTemplateColumns: "1fr 1fr",
                                        paddingLeft: "8px",
                                        paddingTop: "4px",
                                        paddingDown: "4px",
                                        marginBottom: "3px",
                                    }}
                                >
                                    <Text>Partner F Name</Text>
                                    <Text style={{ marginLeft: "8px" }}>
                                        1440
                                    </Text>
                                </View>
                                <View
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
                                    <Text>Partner L Name</Text>
                                    <Text style={{ marginLeft: "8px" }}>
                                        1440
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        display: "grid",
                                        gridTemplateColumns: "1fr 1fr",
                                        paddingLeft: "8px",
                                        paddingTop: "4px",
                                        paddingDown: "4px",
                                        marginBottom: "3px",
                                    }}
                                >
                                    <Text>Partner Dob</Text>
                                    <Text style={{ marginLeft: "8px" }}>
                                        1440
                                    </Text>
                                </View>
                                <View
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
                                    <Text>Partner SIN</Text>
                                    <Text style={{ marginLeft: "8px" }}>
                                        1440
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        display: "grid",
                                        gridTemplateColumns: "1fr 1fr",
                                        paddingLeft: "8px",
                                        paddingTop: "4px",
                                        paddingDown: "4px",
                                        marginBottom: "3px",
                                    }}
                                >
                                    <Text>Work This Year</Text>
                                    <Text style={{ marginLeft: "8px" }}>
                                        1440
                                    </Text>
                                </View>
                                <View
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
                                    <Text>T4s</Text>
                                    <Text style={{ marginLeft: "8px" }}>
                                        {linked?.map((data) => (
                                            <Text
                                                key={data}
                                                style={{ marginLeft: "4px" }}
                                            >
                                                <Link
                                                    style={{ color: "#CD0592" }}
                                                    href={`httTexts://google.com`}
                                                >
                                                    view
                                                </Link>
                                            </Text>
                                        ))}
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        display: "grid",
                                        gridTemplateColumns: "1fr 1fr",
                                        paddingLeft: "8px",
                                        paddingTop: "4px",
                                        paddingDown: "4px",
                                        marginBottom: "3px",
                                    }}
                                >
                                    <Text>Paying Rent</Text>
                                    <Text style={{ marginLeft: "8px" }}>
                                        1440
                                    </Text>
                                </View>
                                <View
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
                                    <Text>Last Yr. Rent paid</Text>
                                    <Text style={{ marginLeft: "8px" }}>
                                        1440
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        display: "grid",
                                        gridTemplateColumns: "1fr 1fr",
                                        paddingLeft: "8px",
                                        paddingTop: "4px",
                                        paddingDown: "4px",
                                        marginBottom: "3px",
                                    }}
                                >
                                    <Text>Rent Receipts</Text>
                                    <Text style={{ marginLeft: "8px" }}>
                                        1440
                                    </Text>
                                </View>
                                <View
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
                                    <Text>Time To Call</Text>
                                    <Text style={{ marginLeft: "8px" }}>
                                        1440
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        display: "grid",
                                        gridTemplateColumns: "1fr 1fr",
                                        paddingLeft: "8px",
                                        paddingTop: "4px",
                                        paddingDown: "4px",
                                        marginBottom: "3px",
                                    }}
                                >
                                    <Text>Phone Number</Text>
                                    <Text style={{ marginLeft: "8px" }}>
                                        1440
                                    </Text>
                                </View>
                                <View
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
                                    <Text>Digital Signature</Text>
                                    <Text style={{ marginLeft: "8px" }}>
                                        1440
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        display: "grid",
                                        gridTemplateColumns: "1fr 1fr",
                                        paddingLeft: "8px",
                                        paddingTop: "4px",
                                        paddingDown: "4px",
                                        marginBottom: "3px",
                                    }}
                                >
                                    <Text>Direct Deposit Form</Text>
                                    <Text style={{ marginLeft: "8px" }}>
                                        1440
                                    </Text>
                                </View>
                                <View
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
                                    <Text>Last Updated</Text>
                                    <Text style={{ marginLeft: "8px" }}>
                                        1440
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    {/* footer */}
                    <View
                        style={{
                            backgroundColor: "#CD1E05",
                            color: "#fff",
                            paddingLeft: "10px",
                            paddingRight: "10px",
                            paddingTop: "10px",
                            paddingBottom: "10px",
                            display: "flex",
                            justifyContent: "space-around",
                            marginToText: "30px",
                        }}
                    >
                        <Text>© 2022 Taxants - All Rights Reserved.</Text>
                        <Text>Let us File your Tax!</Text>
                    </View>
                </View>
            </Page>
        </Document>
    );
};

export default MyDocument;
