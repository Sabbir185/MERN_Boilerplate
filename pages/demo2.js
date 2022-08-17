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
        paddingTop: "10px",
        paddingBottom: "10px",
    },
    header_top_flex: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingTop: "5px",
        fontSize: "14px",
    },
});

// Create Document Component
const MyyDocument = () => {
    const linked = [1, 2];

    return (
        <Document>
            <Page size="A4">
                <View>
                    {/* header part */}
                    <View style={styles.page}>
                        <View style={styles.header_top_flex}>
                            <Text>Dynamic user name</Text>
                            <Text>Taxants</Text>
                        </View>

                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                fontSize: "13px",
                                paddingTop: "15px",
                            }}
                        >
                            <Text>Province Name</Text>
                            <Text>http://taxants.tk/</Text>
                        </View>

                        {/* logo */}
                        <View
                            style={{
                                flexDirection: "row",
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
                                flexDirection: "row",
                                justifyContent: "space-between",
                                fontSize: "10px",
                                paddingTop: "13px",
                            }}
                        >
                            <View
                                style={{
                                    lineHeight: 1.5,
                                    marginTop: "15px",
                                }}
                            >
                                <Text>Submission Date : </Text>
                                <Text>Payment Status : </Text>
                            </View>

                            <View
                                style={{
                                    lineHeight: 1.5,
                                    marginTop: "15px",
                                    textAlign: "end",
                                    fontSize: "10px",
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
                        <Text
                            style={{
                                fontSize: "15px",
                                marginTop: "21px",
                                marginBottom: "15px",
                            }}
                        >
                            Student Tax File #Dynamic_File_Id
                        </Text>

                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-between",
                                fontSize: "12px",
                            }}
                        >
                            {/* left side code */}
                            <View
                                style={{
                                    width: 250,
                                }}
                            >
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",

                                        paddingLeft: "8px",
                                        paddingRight: "8px",

                                        paddingTop: "4px",
                                        paddingBottom: "4px",

                                        marginTop: "4px",
                                        marginBottom: "4px",
                                    }}
                                >
                                    <Text>ID</Text>
                                    <Text></Text>
                                    <Text>1440</Text>
                                </View>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        paddingLeft: "8px",
                                        paddingRight: "8px",

                                        paddingTop: "4px",
                                        paddingBottom: "4px",

                                        backgroundColor: "#f1f1f1",
                                        marginTop: "4px",
                                        marginBottom: "4px",
                                    }}
                                >
                                    <Text>First Name</Text>
                                    <Text></Text>
                                    <Text>1440</Text>
                                </View>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        paddingLeft: "8px",
                                        paddingRight: "8px",
                                        paddingTop: "4px",
                                        paddingBottom: "4px",
                                        marginTop: "4px",
                                        marginBottom: "4px",
                                    }}
                                >
                                    <Text>Middle Name</Text>
                                    <Text></Text>
                                    <Text>1440</Text>
                                </View>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        paddingLeft: "8px",
                                        paddingRight: "8px",
                                        paddingTop: "4px",
                                        paddingBottom: "4px",
                                        backgroundColor: "#f1f1f1",
                                        marginTop: "4px",
                                        marginBottom: "4px",
                                    }}
                                >
                                    <Text>Last Name</Text>
                                    <Text></Text>
                                    <Text>1440</Text>
                                </View>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        paddingLeft: "8px",
                                        paddingRight: "8px",
                                        paddingTop: "4px",
                                        paddingBottom: "4px",
                                        marginTop: "4px",
                                        marginBottom: "4px",
                                    }}
                                >
                                    <Text>College Attending</Text>
                                    <Text></Text>
                                    <Text>1440</Text>
                                </View>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        paddingLeft: "8px",
                                        paddingRight: "8px",
                                        paddingTop: "4px",
                                        paddingBottom: "4px",
                                        backgroundColor: "#f1f1f1",
                                        marginTop: "4px",
                                        marginBottom: "4px",
                                    }}
                                >
                                    <Text>T2202A</Text>
                                    <Text></Text>
                                    <Text>1440</Text>
                                </View>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        paddingLeft: "8px",
                                        paddingRight: "8px",
                                        paddingTop: "4px",
                                        paddingBottom: "4px",
                                        marginTop: "4px",
                                        marginBottom: "4px",
                                    }}
                                >
                                    <Text>First Time Tax</Text>
                                    <Text></Text>
                                    <Text>1440</Text>
                                </View>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        paddingLeft: "8px",
                                        paddingRight: "8px",
                                        paddingTop: "4px",
                                        paddingBottom: "4px",
                                        backgroundColor: "#f1f1f1",
                                        marginTop: "4px",
                                        marginBottom: "4px",
                                    }}
                                >
                                    <Text>Landed Year</Text>
                                    <Text></Text>
                                    <Text>1440</Text>
                                </View>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        paddingLeft: "8px",
                                        paddingRight: "8px",
                                        paddingTop: "4px",
                                        paddingBottom: "4px",
                                        marginTop: "4px",
                                        marginBottom: "4px",
                                    }}
                                >
                                    <Text>Notice Of Assessment</Text>
                                    <Text></Text>
                                    <Text>1440</Text>
                                </View>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        paddingLeft: "8px",
                                        paddingRight: "8px",
                                        paddingTop: "4px",
                                        paddingBottom: "4px",
                                        backgroundColor: "#f1f1f1",
                                        marginTop: "4px",
                                        marginBottom: "4px",
                                    }}
                                >
                                    <Text>Date Of Birth</Text>
                                    <Text></Text>
                                    <Text>1440</Text>
                                </View>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        paddingLeft: "8px",
                                        paddingRight: "8px",
                                        paddingTop: "4px",
                                        paddingBottom: "4px",
                                        marginTop: "4px",
                                        marginBottom: "4px",
                                    }}
                                >
                                    <Text>Social Insurance No.</Text>
                                    <Text></Text>
                                    <Text>1440</Text>
                                </View>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        paddingLeft: "8px",
                                        paddingRight: "8px",
                                        paddingTop: "4px",
                                        paddingBottom: "4px",
                                        backgroundColor: "#f1f1f1",
                                        marginTop: "4px",
                                        marginBottom: "4px",
                                    }}
                                >
                                    <Text>Address</Text>
                                    <Text></Text>
                                    <Text>1440</Text>
                                </View>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        paddingLeft: "8px",
                                        paddingRight: "8px",
                                        paddingTop: "4px",
                                        paddingBottom: "4px",
                                        marginTop: "4px",
                                        marginBottom: "4px",
                                    }}
                                >
                                    <Text>City</Text>
                                    <Text></Text>
                                    <Text>1440</Text>
                                </View>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        paddingLeft: "8px",
                                        paddingRight: "8px",
                                        paddingTop: "4px",
                                        paddingBottom: "4px",
                                        backgroundColor: "#f1f1f1",
                                        marginTop: "4px",
                                        marginBottom: "4px",
                                    }}
                                >
                                    <Text>Postal Code</Text>
                                    <Text></Text>
                                    <Text>1440</Text>
                                </View>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        paddingLeft: "8px",
                                        paddingRight: "8px",
                                        paddingTop: "4px",
                                        paddingBottom: "4px",
                                        marginTop: "4px",
                                        marginBottom: "4px",
                                    }}
                                >
                                    <Text>Province</Text>
                                    <Text></Text>
                                    <Text>1440</Text>
                                </View>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        paddingLeft: "8px",
                                        paddingRight: "8px",
                                        paddingTop: "4px",
                                        paddingBottom: "4px",
                                        backgroundColor: "#f1f1f1",
                                        marginTop: "4px",
                                        marginBottom: "4px",
                                    }}
                                >
                                    <Text>Assigned</Text>
                                    <Text></Text>
                                    <Text>1440</Text>
                                </View>
                            </View>

                            {/* right side code */}
                            <View
                                style={{
                                    width: 250,
                                }}
                            >
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        paddingLeft: "8px",
                                        paddingRight: "8px",

                                        paddingTop: "4px",
                                        paddingBottom: "4px",

                                        marginTop: "4px",
                                        marginBottom: "4px",
                                    }}
                                >
                                    <Text>Payment</Text>
                                    <Text style={{ marginLeft: "8px" }}>
                                        1440
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        paddingLeft: "8px",
                                        paddingRight: "8px",
                                        paddingTop: "4px",
                                        paddingBottom: "4px",
                                        backgroundColor: "#f1f1f1",
                                        marginTop: "4px",
                                        marginBottom: "4px",
                                    }}
                                >
                                    <Text>Marital Status</Text>
                                    <Text style={{ marginLeft: "8px" }}>
                                        1440
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        paddingLeft: "8px",
                                        paddingRight: "8px",
                                        paddingTop: "4px",
                                        paddingBottom: "4px",
                                        marginTop: "4px",
                                        marginBottom: "4px",
                                    }}
                                >
                                    <Text>Partner F Name</Text>
                                    <Text style={{ marginLeft: "8px" }}>
                                        1440
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        paddingLeft: "8px",
                                        paddingRight: "8px",
                                        paddingTop: "4px",
                                        paddingBottom: "4px",
                                        backgroundColor: "#f1f1f1",
                                        marginTop: "4px",
                                        marginBottom: "4px",
                                    }}
                                >
                                    <Text>Partner L Name</Text>
                                    <Text style={{ marginLeft: "8px" }}>
                                        1440
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        paddingLeft: "8px",
                                        paddingRight: "8px",
                                        paddingTop: "4px",
                                        paddingBottom: "4px",
                                        marginTop: "4px",
                                        marginBottom: "4px",
                                    }}
                                >
                                    <Text>Partner Dob</Text>
                                    <Text style={{ marginLeft: "8px" }}>
                                        1440
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        paddingLeft: "8px",
                                        paddingRight: "8px",
                                        paddingTop: "4px",
                                        paddingBottom: "4px",
                                        backgroundColor: "#f1f1f1",
                                        marginTop: "4px",
                                        marginBottom: "4px",
                                    }}
                                >
                                    <Text>Partner SIN</Text>
                                    <Text style={{ marginLeft: "8px" }}>
                                        1440
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        paddingLeft: "8px",
                                        paddingRight: "8px",
                                        paddingTop: "4px",
                                        paddingBottom: "4px",
                                        marginTop: "4px",
                                        marginBottom: "4px",
                                    }}
                                >
                                    <Text>Work This Year</Text>
                                    <Text style={{ marginLeft: "8px" }}>
                                        1440
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        paddingLeft: "8px",
                                        paddingRight: "8px",
                                        paddingTop: "4px",
                                        paddingBottom: "4px",
                                        backgroundColor: "#f1f1f1",
                                        marginTop: "4px",
                                        marginBottom: "4px",
                                    }}
                                >
                                    <Text>T4s</Text>
                                    <Text style={{ paddingRight: "4px", }}>
                                        {linked?.map((data) => (
                                            <Text
                                                key={data}
                                            >
                                                <Link
                                                    style={{ color: "#CD0592",  textDecoration: 'none'}}
                                                    href={`https://google.com`}
                                                >
                                                   <Text style={{ marginLeft: "4px" }}> view</Text>
                                                </Link>
                                            </Text>
                                        ))}
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        paddingLeft: "8px",
                                        paddingRight: "8px",
                                        paddingTop: "4px",
                                        paddingBottom: "4px",
                                        marginTop: "4px",
                                        marginBottom: "4px",
                                    }}
                                >
                                    <Text>Paying Rent</Text>
                                    <Text style={{ marginLeft: "8px" }}>
                                        1440
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        paddingLeft: "8px",
                                        paddingRight: "8px",
                                        paddingTop: "4px",
                                        paddingBottom: "4px",
                                        backgroundColor: "#f1f1f1",
                                        marginTop: "4px",
                                        marginBottom: "4px",
                                    }}
                                >
                                    <Text>Last Yr. Rent paid</Text>
                                    <Text style={{ marginLeft: "8px" }}>
                                        1440
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        paddingLeft: "8px",
                                        paddingRight: "8px",
                                        paddingTop: "4px",
                                        paddingBottom: "4px",
                                        marginTop: "4px",
                                        marginBottom: "4px",
                                    }}
                                >
                                    <Text>Rent Receipts</Text>
                                    <Text style={{ marginLeft: "8px" }}>
                                        1440
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        paddingLeft: "8px",
                                        paddingRight: "8px",
                                        paddingTop: "4px",
                                        paddingBottom: "4px",
                                        backgroundColor: "#f1f1f1",
                                        marginTop: "4px",
                                        marginBottom: "4px",
                                    }}
                                >
                                    <Text>Time To Call</Text>
                                    <Text style={{ marginLeft: "8px" }}>
                                        1440
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        paddingLeft: "8px",
                                        paddingRight: "8px",
                                        paddingTop: "4px",
                                        paddingBottom: "4px",
                                        marginTop: "4px",
                                        marginBottom: "4px",
                                    }}
                                >
                                    <Text>Phone Number</Text>
                                    <Text style={{ marginLeft: "8px" }}>
                                        1440
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        paddingLeft: "8px",
                                        paddingRight: "8px",
                                        paddingTop: "4px",
                                        paddingBottom: "4px",
                                        backgroundColor: "#f1f1f1",
                                        marginTop: "4px",
                                        marginBottom: "4px",
                                    }}
                                >
                                    <Text>Digital Signature</Text>
                                    <Text style={{ marginLeft: "8px" }}>
                                        1440
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        paddingLeft: "8px",
                                        paddingRight: "8px",

                                        paddingTop: "4px",
                                        paddingBottom: "4px",

                                        marginTop: "4px",
                                        marginBottom: "4px",
                                    }}
                                >
                                    <Text>Direct Deposit Form</Text>
                                    <Link style={{ color: "#CD0592",  textDecoration: 'none' }} href={`https://google.com`}>
                                        view
                                    </Link>
                                </View>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "space-between",
                                        paddingLeft: "8px",
                                        paddingRight: "8px",
                                        paddingTop: "4px",
                                        paddingBottom: "4px",
                                        backgroundColor: "#f1f1f1",
                                        marginTop: "4px",
                                        marginBottom: "4px",
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
                            flexDirection: 'row',
                            justifyContent: "space-around",
                            marginTop: 100,
                            fontSize: '14px'
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

export default MyyDocument;
