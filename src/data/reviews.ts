// Real Google reviews of IDGen, copied as written by the reviewers. Reviews
// that Google shows truncated ("… More") are kept truncated: only the text
// that was visible is used, never completed. No star ratings are recorded
// here because the source copy did not include them.
export type Review = {
  name: string;
  text: string;
  /** Organisation / location the reviewer says the order was for */
  forWhom?: string;
  localGuide?: boolean;
};

export const REVIEWS: Review[] = [
  {
    name: "Pranjal Dutta",
    forWhom: "College, Jorhat",
    text: "I think idgen is best I'd card printing service provider in entire Assam and entire North east India for school, college and university they are the best, we are buying from them from last 7 Years for our college in jorhat.",
  },
  {
    name: "Hrishikesh Goswami",
    forWhom: "School, Dibrugarh",
    localGuide: true,
    text: "For our school's requirement, we ordered 2,000 Student ID Card Full Sets from IDGen in Dibrugarh. We were pleased with the quality and the way the order was handled. The products were received properly and were as expected. The overall …",
  },
  {
    name: "Krishan Patwari",
    forWhom: "Royal Global University, Guwahati",
    localGuide: true,
    text: "We recently ordered 3,000 printed RFID cards for students from IDGen for Royal Global University, Guwahati, and we are happy with the overall experience. The cards were well printed, looked professional, and met our requirements. The team …",
  },
  {
    name: "Ranjan Dutta",
    forWhom: "Inspire Academy, Tezpur",
    text: "We purchased 1,004 multicolor lanyards with printed RFID cards and holders from IDGen for Inspire Academy in Tezpur. The products were good in quality and looked nice. We were satisfied with the overall order and the way the team handled …",
  },
  {
    name: "Munna Payeng",
    localGuide: true,
    text: "Very happy with the service! The ID cards were printed with good quality and delivered as expected. The vendor was professional, responsive, and provided a smooth experience throughout the process. Highly satisfied with the service and would definitely recommend them to others!",
  },
  {
    name: "Rimjhim Gogoi",
    forWhom: "Dr. Radhakrishnan School, Dibrugarh",
    text: "We ordered 2,000 Student ID Card Full Sets from IDGen for Dr. Radhakrishnan School Of Arts, Commerce & Science in Dibrugarh. We were happy with the overall experience and the quality of the ID card sets we received. The products were as …",
  },
  {
    name: "James Zote",
    forWhom: "Event, Shillong",
    text: "I ordered 650 multi-colour 20mm lanyards with fish hooks from IDGen for our event in Shillong, Meghalaya. The lanyards turned out really well and were just what we needed for the event. The quality was good, the colours looked nice, and …",
  },
  {
    name: "Mr_ Champak",
    forWhom: "Stanford International School, Guwahati",
    text: "Our experience with IDGen was good. We got multicolor printed lanyards along with printed PVC ID cards and holders for Stanford International School, Sualkuchi, Guwahati, Assam. The printing was clear and the products were received in good …",
  },
  {
    name: "Meena Gupta",
    forWhom: "Institutes, Dimapur & Kohima",
    text: "I had a good experience with IDGen Identity Solutions. We ordered identity products for our institutes in Dimapur and Kohima, Nagaland, and were satisfied with the overall experience. The product range includes PVC ID cards, student …",
  },
  {
    name: "hrhopeclinicshillong",
    forWhom: "HR Hope Clinic, Shillong",
    text: "We received good quality I -cards for our Organization. They have best prices with a vast variety of designs. Highly recommendable!",
  },
  {
    name: "Prem Kumar Shah",
    forWhom: "School, North Lakhimpur",
    text: "We got our school ID cards from IDGen in North Lakhimpur, Assam, and had a good experience overall. The multi-colour lanyards with vertical (V2) holders and printed PVC cards turned out well and were just what we needed. The quality was …",
  },
  {
    name: "Rakesh Barman",
    forWhom: "M.P Academy, Guwahati",
    text: "We recently got 500 custom printed lanyards with printed PVC ID cards and holders from IDGen for M.P Academy, Kheraikuchi, Guwahati. The cards and lanyards were of good quality and the printing came out nicely. The order was handled …",
  },
  {
    name: "Dhon Morang",
    forWhom: "PM SHRI 673 No. Demow LP School",
    text: "We recently got 20mm satin white lanyards with vertical (V2) holders and single-side PVC cards from IDGen for PM SHRI 673 No. Demow LP School in Demow, Assam. The complete set turned out well and was suitable for our school's requirement. …",
  },
  {
    name: "alock bordoloi",
    forWhom: "School, Sivasagar",
    text: "We recently ordered 20mm satin lanyards with horizontal (H2) holders from IDGen for our school in Sivasagar, Assam. The lanyards turned out well and the quality was good. Everything was handled smoothly, and the order was received as …",
  },
  {
    name: "Bikram Das",
    text: "Good quality & fast delivery",
  },
  {
    name: "Meraj Ahmed",
    text: "Awesome quality and super fast service",
  },
];

// Places the reviewers say they ordered for (from the review text).
export const REVIEW_PLACES = [
  "Guwahati", "Jorhat", "Dibrugarh", "Tezpur", "Sivasagar", "North Lakhimpur",
  "Shillong", "Dimapur", "Kohima", "Demow", "Udalguri", "Changlang", "Ukhrul",
];
