import React from "react";
import {
  Document,
  Font,
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";
import { useStore } from "../../utils/store";
import Mural from "../../assets/images/Mural-new.png";
import UniversalSans from "../../assets/fonts/UniversalSans-500.ttf";
import UniversalSansBold from "../../assets/fonts/UniversalSans-680.ttf";

// Create styles
Font.register({ family: "Universal Sans", src: UniversalSans });
Font.register({ family: "Universal Sans Bold", src: UniversalSansBold });

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#FFFFFF",
  },
  section1: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
    backgroundColor: "#E1F5F6",
    height: "100%",
  },
  section2: {
    paddingHorizontal: 30,
    paddingVertical: 30,
    height: "100%",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexDirection: "row",
    marginBottom: 12,
    paddingBottom: 12,
    borderBottom: "1px solid #818181",
  },
  row2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottom: "1px solid #818181",
  },
  dataHolder: {
    width: "55%",
  },
  emissionsHolder: {
    width: "40%",
  },
  services: {
    width: "100%",
  },
  titleHolder: {
    width: "100%",
    textAlign: "center",
    marginBottom: 14,
  },
  title: {
    fontSize: 25,
    fontFamily: "Universal Sans Bold",
    color: "#3C4043",
    marginBottom: 10,
  },
  subTitleHolder: {
    display: "block",
    width: "100%",
    marginBottom: 18,
    borderBottom: "1px solid #3C4043",
  },
  subTitleInner: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
  },
  subTitle: {
    fontSize: 18,
    paddingBottom: 8,
    width: "100%",
    fontFamily: "Universal Sans Bold",
    color: "#3C4043",
  },
  text: {
    fontSize: 10,
    textAlign: "justify",
    padding: 5,
    fontFamily: "Universal Sans",
    color: "#3C4043",
  },
  textSmall: {
    fontSize: 8,
  },
  image: {
    height: 400,
    width: 400,
  },
  numberHolder: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 5,
    paddingBottom: 8,
  },
  number: {
    display: "block",
    color: "#FFFFFF",
    backgroundColor: "#338165",
    borderRadius: "50%",
    height: 18,
    width: 18,
    fontSize: 10,
    textAlign: "center",
    paddingTop: 3,
    fontFamily: "Universal Sans",
  },
  dsHolder: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  },
  dsWrapper: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    height: "auto",
    border: "1px solid #ECECEC",
    borderTop: 0,
    borderRadius: 8,
  },
  dsYears: {
    width: "100%",
    height: "24px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    border: "1px solid #ECECEC",
    borderTop: 0,
    backgroundColor: "#F8F9FA",
    borderRadius: 0,
    borderTopRightRadius: 8,

    overflow: "hidden",
  },
  dsNumber: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    padding: 5,
    backgroundColor: "#ECECEC",
    fontSize: 10,
    textAlign: "justify",
    fontFamily: "Universal Sans",
    color: "#3C4043",
    height: "100%",
  },
  dsHeading: {
    display: "flex",
    border: "1px solid #ECECEC",
    alignItems: "flex-start",
    justifyContent: "center",
    padding: 5,
    flexBasis: "20%",
    height: "24px",
    fontSize: 10,
    fontFamily: "Universal Sans",
    color: "#3C4043",
    backgroundColor: "#ECECEC",
    borderTopLeftRadius: 8,
  },
  dsRowSection: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  dsRow: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    fontSize: 10,
    textAlign: "justify",
    paddingVertical: 5,
    fontFamily: "Universal Sans",
    color: "#3C4043",
  },

  dsBusBar: {
    backgroundColor: "#FDBD1C",
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 5,
    // paddingHorizontal: 10,
  },
  renewalDeployments: {
    backgroundColor: "#ECECEC",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  dsTerms: {
    padding: 8,
    marginBottom: 8,
  },
});

function PdfDocument() {
  const fbFleetsize = useStore((state) => state.fbFleetsize);
  const fbElectricGoal = useStore((state) => state.fbElectricGoal);
  const fbDeployments = useStore((state) => state.fbDeployments);
  const fbServiceYears = useStore((state) => state.fbServiceYears);

  const deployments = Number(fbDeployments);
  const serviceYears = Number(fbServiceYears);
  const busesPerRow = Math.floor(Number(fbElectricGoal) / deployments);
  const remainder = Number(fbElectricGoal) % deployments;
  const years = serviceYears + deployments;

  const numbers = [];
  for (let i = 0; i < years; i++) {
    numbers.push(
      <View
        key={i}
        style={[
          styles.dsNumber,
          {
            flexBasis: `${100 / years}%`,
          },
        ]}
      >
        <Text style={styles.textSmall}>{i + 1}</Text>
      </View>
    );
  }

  const rows = [];
  for (let i = 0; i < deployments; i++) {
    rows.push(
      <View
        key={i}
        style={[
          styles.dsRow,
          {
            marginLeft: `${(100 / years) * i}%`,
          },
        ]}
      >
        <View
          style={[
            styles.dsBusBar,
            {
              flexBasis: `${(100 / years) * serviceYears}%`,
            },
          ]}
        >
          <Text>
            {" "}
            {i < deployments - remainder ? busesPerRow : busesPerRow + 1} Buses
          </Text>
        </View>
        <View
          style={[
            styles.renewalDeployments,
            {
              fontSize: 10,
              flexBasis: `${(100 / years) * deployments - (100 / years) * i}%`,
            },
          ]}
        >
          <Text>{i === 0 ? "R.D.**" : "R.D."}</Text>
        </View>
      </View>
    );
  }

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section1}>
          <Text style={styles.title}>Highland Fleet Builder</Text>
          <Text
            style={[
              styles.text,
              {
                textAlign: "center",
                marginBottom: "25px",
              },
            ]}
          >
            Hello, here is your district’s fleet report.
          </Text>
          <Image style={styles.image} src={Mural} />
        </View>
      </Page>
      <Page size="A4" style={styles.page}>
        <View style={styles.section2}>
          <View style={styles.titleHolder}>
            <Text style={styles.title}>Your Highland Fleet Report</Text>
          </View>
          <View style={[styles.row, { borderBottom: "none" }]}>
            <View style={styles.dataHolder}>
              <View style={styles.subTitleHolder}>
                <View style={styles.subTitleInner}>
                  <View style={styles.numberHolder}>
                    <Text style={styles.number}>1</Text>
                  </View>
                  <Text style={styles.subTitle}>Fleet Details</Text>
                </View>
              </View>
              <View style={styles.row2}>
                <Text style={styles.text}>Fleet size</Text>
                <Text style={styles.text}>{fbFleetsize}</Text>
              </View>
              <View style={styles.row2}>
                <Text style={styles.text}>Electric goal</Text>
                <Text style={styles.text}>{fbElectricGoal}</Text>
              </View>
              <View style={styles.row2}>
                <Text style={styles.text}>Deployments</Text>
                <Text style={styles.text}>{fbDeployments}</Text>
              </View>
              <View style={styles.row2}>
                <Text style={styles.text}>Service years</Text>
                <Text style={styles.text}>{fbServiceYears}</Text>
              </View>
            </View>
            <View style={styles.emissionsHolder}>
              <View style={styles.subTitleHolder}>
                <Text style={styles.subTitle}>Emissions Savings</Text>
              </View>
              <Text
                style={[
                  styles.text,
                  {
                    borderBottom: "none",
                    backgroundColor: "#E1F5F6",
                    borderRadius: "5px",
                    marginBottom: "5px",
                    padding: "5px",
                  },
                ]}
              >
                ~{(600 * fbElectricGoal).toLocaleString("en-US")} fewer gallons
                of diesel.
              </Text>
            </View>
          </View>

          {/* DEPLOYMENT */}

          <View style={styles.subTitleHolder}>
            <View style={styles.subTitleInner}>
              <View style={styles.numberHolder}>
                <Text style={styles.number}>2</Text>
              </View>
              <Text style={styles.subTitle}>Deployment Schedule</Text>
            </View>
          </View>
          <View style={styles.dsWrapper}>
            <View style={styles.dsHeading}>
              <Text>Year</Text>
            </View>
            <View style={styles.dsHolder}>
              <View style={styles.dsYears}>{numbers}</View>
              <View style={styles.dsRowSection}>{rows}</View>
            </View>
          </View>

          <View style={styles.dsTerms}>
            <Text style={styles.text}>
              *Deployment schedule displayed is illustrative only.
            </Text>
            <Text style={styles.text}>**Renewal Deployments.</Text>
          </View>

          {/* DEPLOYMENT END */}

          <View style={styles.services}>
            <View style={styles.subTitleHolder}>
              <View style={styles.subTitleInner}>
                <View style={styles.numberHolder}>
                  <Text style={styles.number}>3</Text>
                </View>
                <Text style={styles.subTitle}>Included Services</Text>
              </View>
            </View>
            <View style={styles.row}>
              <Text style={[styles.text, styles.textSmall, { width: "30%" }]}>
                Chargers
              </Text>
              <Text style={[styles.text, styles.textSmall, { width: "60%" }]}>
                At least one per bus, including installation and utility connection at your depot.
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={[styles.text, styles.textSmall, { width: "30%" }]}>
                Performance Guarantee
              </Text>
              <Text style={[styles.text, styles.textSmall, { width: "60%" }]}>
                If your fleet doesn’t work as promised, we reimburse you for downtime.
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={[styles.text, styles.textSmall, { width: "30%" }]}>
                Staff Training
              </Text>
              <Text style={[styles.text, styles.textSmall, { width: "60%" }]}>
                Highland trains your drivers, mechanics, and team to be your community's electric fleet experts.
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={[styles.text, styles.textSmall, { width: "30%" }]}>
                Warranty & Maintenance
              </Text>
              <Text style={[styles.text, styles.textSmall, { width: "60%" }]}>
                Highland provides a bumper-to-bumper warranty and will reimburse your district for any repairs.
              </Text>
            </View>
            <View style={styles.row}>
              <Text style={[styles.text, styles.textSmall, { width: "30%" }]}>
                Dashboard
              </Text>
              <Text style={[styles.text, styles.textSmall, { width: "60%" }]}>
                Track your electric fleet's location, state of charge, and route history in the palm of your hand.
              </Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  );
}

export default PdfDocument;

