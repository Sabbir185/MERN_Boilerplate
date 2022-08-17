import Head from "next/head";
import {
    PDFDownloadLink,
    PDFViewer,
} from "@react-pdf/renderer/lib/react-pdf.browser.cjs.js";
import MyDocument from "./document";
import MyyDocument from "./demo2";

export default function Home() {

    return (
        <div>
            <PDFViewer style={{ width: "100%", height: "90vh" }}>
                <MyyDocument />
            </PDFViewer>

            <PDFDownloadLink
                document={<MyyDocument />}
                fileName="1234.pdf"
            >
                <button >download PDF</button>
            </PDFDownloadLink>
        </div>
    );
}
