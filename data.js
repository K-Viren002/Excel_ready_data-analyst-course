const DATAHUB = {
  levels: [
    {
      id: 1,
      code: "L1",
      title: "Foundations",
      subtitle: "No prior Excel knowledge needed",
      color: "#1A7A4A",
      light: "#9FE1CB",
      dark: "#085041",
      badge: "Excel Beginner",
      weeks: "2 weeks",
      hours: "10–12 hrs",
      dataset: "FMCG Sales",
      lessons: [
        {
          code: "L1.1", title: "Meet your data",
          sub: "Understand the spreadsheet interface and navigate a real dataset",
          time: "45 min", prereq: "None", type: "Skill",
          dataset: "FMCG Sales (120 rows, 9 cols)",
          tools: ["Navigation","Freeze panes","Sort","Filter","Selection"],
          theory: {
            heading: "What is a spreadsheet?",
            body: "A spreadsheet organises data into rows and columns. Each box is called a cell. A row goes across (horizontal), a column goes down (vertical). In your FMCG dataset, each row is one sale record, and each column is one piece of information about that sale — like the brand name, region, or revenue.",
            keypoints: ["Rows = records (one sale per row)","Columns = attributes (brand, region, revenue)","A cell is identified by column letter + row number: A1, B4, I12","Your FMCG dataset has 120 rows and 9 columns"]
          },
          example: {
            heading: "Navigating the FMCG dataset",
            steps: ["Open the FMCG Sales sheet","Press Ctrl+End to jump to the last cell — this tells you the size of your data","Click on cell A1, then press Ctrl+Shift+End to select all data","Use the filter dropdown on Row 3 (header row) to filter by Region"]
          },
          guided: [
            "Click View → Freeze Panes → Freeze Top Row so headers stay visible when you scroll",
            "Click the Region column header → Data → Sort A to Z",
            "Click the dropdown arrow on the Brand column → uncheck all → check only 'HUL' → click OK",
            "You now see only HUL rows. Count them — write the number in cell L2",
            "Clear the filter: click the dropdown again → Select All → OK"
          ],
          task: {
            heading: "Your turn",
            description: "Using only Sort and Filter — no formulas yet:",
            questions: [
              "Filter to show only North region. How many rows appear?",
              "Now also filter Brand = HUL (both filters on). How many rows?",
              "Clear all filters. Sort by Revenue column, highest to lowest. What is the top brand?"
            ],
            answer_hint: "Write your 3 answers in cells N2, N3, N4 of the FMCG sheet"
          },
          answers: ["North region has 24 rows", "HUL + North = approximately 3 rows", "Top revenue brand will be HUL or Dabur depending on data"],
          hint: "For multiple filters: first filter Region column, then with that active, also filter the Brand column. Both filters stack on top of each other."
        },
        {
          code: "L1.2", title: "Basic math formulas",
          sub: "SUM, AVERAGE, MIN, MAX, COUNT — the 5 functions you'll use every single day",
          time: "50 min", prereq: "L1.1", type: "Skill",
          dataset: "FMCG Sales — Revenue & Units_Sold columns",
          tools: ["SUM","AVERAGE","MIN","MAX","COUNT","COUNTA"],
          theory: {
            heading: "The 5 core functions",
            body: "Every Excel formula starts with the = sign. These 5 functions handle 80% of all basic data analysis. You will use them in every single project you ever work on.",
            keypoints: [
              "=SUM(range) — adds all numbers in the range",
              "=AVERAGE(range) — divides total by count to find the mean",
              "=MIN(range) — returns the smallest number",
              "=MAX(range) — returns the largest number",
              "=COUNT(range) — counts how many cells contain numbers"
            ]
          },
          example: {
            heading: "Applied to FMCG Revenue column (column I)",
            steps: [
              "=SUM(I4:I123) → adds all 120 revenue values",
              "=AVERAGE(I4:I123) → mean revenue per row",
              "=MIN(I4:I123) → the lowest single revenue value",
              "=MAX(I4:I123) → the highest single revenue value",
              "=COUNT(I4:I123) → should return 120 if no blanks"
            ]
          },
          guided: [
            "Click on an empty cell — try cell L4",
            "Type =SUM( then click cell I4, hold Shift, click I123, type ) and press Enter",
            "In L5, type =AVERAGE(I4:I123) and press Enter",
            "In L6, type =MIN(I4:I123) and press Enter",
            "In L7, type =MAX(I4:I123) and press Enter",
            "In L8, type =COUNT(I4:I123) and press Enter",
            "In column K (next to your formulas), type labels: Total Revenue, Avg Revenue, Min Revenue, Max Revenue, Row Count"
          ],
          task: {
            heading: "Your turn",
            description: "Now do the same for the Units_Sold column (column G):",
            questions: [
              "What is the total units sold across all 120 rows?",
              "What is the average units sold per row?",
              "What is the minimum units sold in any single row?",
              "What is the maximum units sold in any single row?",
              "Bonus: What is the RANGE (MAX minus MIN) of revenue? Write a formula for this."
            ],
            answer_hint: "Build a labelled summary block in columns K and L, rows 10 to 15"
          },
          answers: ["=SUM(G4:G123)","=AVERAGE(G4:G123)","=MIN(G4:G123)","=MAX(G4:G123)","Bonus: =MAX(I4:I123)-MIN(I4:I123)"],
          hint: "All 5 formulas follow the exact same pattern — just swap the function name. =SUM(G4:G123) becomes =AVERAGE(G4:G123) and so on. The column letter is G for units, I for revenue."
        },
        {
          code: "L1.3", title: "Counting with conditions",
          sub: "COUNTIF and COUNTIFS — count only the rows that match your criteria",
          time: "50 min", prereq: "L1.2", type: "Skill",
          dataset: "FMCG Sales — Brand, Region, Revenue columns",
          tools: ["COUNTIF","COUNTIFS","Wildcard *","Multiple criteria"],
          theory: {
            heading: "Counting with conditions",
            body: "COUNT counts everything. But in real analysis you need to count only specific things — how many HUL rows? How many North + HUL rows? COUNTIF and COUNTIFS let you add conditions to your count.",
            keypoints: [
              "=COUNTIF(range, criteria) — counts rows matching ONE condition",
              "=COUNTIFS(range1, criteria1, range2, criteria2) — matches MULTIPLE conditions",
              'Criteria text must be in quotes: "HUL", "North"',
              'Criteria with operators: ">200000", ">=100"',
              "COUNTIFS is just COUNTIF with extra pairs added"
            ]
          },
          example: {
            heading: "Counting in the FMCG dataset",
            steps: [
              '=COUNTIF(D4:D123,"HUL") → count of HUL rows',
              '=COUNTIF(F4:F123,"North") → count of North region rows',
              '=COUNTIF(I4:I123,">200000") → rows where revenue exceeds ₹2L',
              '=COUNTIFS(D4:D123,"HUL",F4:F123,"North") → HUL rows in North only',
              '=COUNTIFS(D4:D123,"Dabur",I4:I123,">150000") → Dabur rows with revenue > ₹1.5L'
            ]
          },
          guided: [
            "In an empty area, build a Brand Count table",
            'In column K write brand names: HUL, Dabur, Marico, ITC, Nestlé (one per row)',
            'In column L next to each brand, write =COUNTIF(D$4:D$123,K4) — drag this down for all brands',
            'The $ signs lock the range when you drag the formula down',
            'Now add a Region Count table below — same pattern using column F'
          ],
          task: {
            heading: "Your turn",
            description: "Answer these 4 questions using COUNTIF or COUNTIFS formulas:",
            questions: [
              "How many rows belong to the South region?",
              "How many rows have Revenue greater than ₹3,00,000?",
              "How many rows are HUL brand AND East region combined?",
              "How many rows have Achievement % greater than or equal to 100?"
            ],
            answer_hint: "Write each formula in column N with a label in column M"
          },
          answers: ['=COUNTIF(F4:F123,"South")','=COUNTIF(I4:I123,">300000")', '=COUNTIFS(D4:D123,"HUL",F4:F123,"East")','=COUNTIF(K4:K123,">=100")'],
          hint: 'For revenue > 300000: the condition goes inside quotes with the operator: =COUNTIF(I4:I123,">300000"). For multiple conditions use COUNTIFS with pairs: =COUNTIFS(range1,"value1",range2,"value2")'
        },
        {
          code: "L1.4", title: "Logic and decisions",
          sub: "IF statements — make Excel respond to conditions automatically",
          time: "55 min", prereq: "L1.3", type: "Skill",
          dataset: "FMCG Sales — Achievement_% column (col K)",
          tools: ["IF","Nested IF","AND","OR","IFERROR"],
          theory: {
            heading: "Making Excel think for you",
            body: 'IF is the most powerful basic formula in Excel. It checks a condition and returns one value if true, another if false. Syntax: =IF(condition, value_if_true, value_if_false). You can nest IFs inside each other to handle multiple outcomes — like a decision tree.',
            keypoints: [
              "=IF(condition, true, false) — basic structure",
              '=IF(A1>100,"Pass","Fail") — text outcomes',
              "=IF(A1>100, A1*0.1, 0) — numeric outcomes",
              '=IF(A1>115,"Excellent",IF(A1>=100,"Good","Poor")) — nested IF for 3 outcomes',
              "You can nest up to 64 IFs (but keep it readable)"
            ]
          },
          example: {
            heading: "Labelling rows in FMCG dataset",
            steps: [
              'Add column header "Status" in cell L3',
              '=IF(K4>=100,"On Target","Below Target") in L4',
              "Drag the formula down to L123",
              "Every row now has a label based on its achievement %",
              'For 3 outcomes: =IF(K4>115,"Exceeded",IF(K4>=100,"On Target","Below"))'
            ]
          },
          guided: [
            'Click cell M3 and type "Performance" as a header',
            'In M4 type: =IF(K4>115,"Excellent",IF(K4>=100,"Good","Needs Work"))',
            "Press Enter — you should see one of the three labels",
            "Double-click the fill handle (small square at bottom-right of M4) to fill all 120 rows",
            'Now count each: =COUNTIF(M4:M123,"Excellent") — do this for all 3 categories',
            "Check they add up to 120 total"
          ],
          task: {
            heading: "Your turn",
            description: "Add two new columns with IF formulas:",
            questions: [
              'Column N "Revenue Band": High if Revenue > ₹3L, Medium if ₹1L–3L, Low if below ₹1L',
              'Column O "Region Group": use IF to label North+East as "Zone A" and South+West+Central as "Zone B"',
              "Count how many rows fall in each Revenue Band and each Zone"
            ],
            answer_hint: "Revenue Band uses nested IF on column I. Region Group uses IF with OR on column F."
          },
          answers: ['=IF(I4>300000,"High",IF(I4>=100000,"Medium","Low"))','=IF(OR(F4="North",F4="East"),"Zone A","Zone B")','Use COUNTIF on your new columns'],
          hint: 'For Zone A/B: =IF(OR(F4="North",F4="East"),"Zone A","Zone B") — OR() checks if any condition is true. For Revenue Band, nest two IFs: =IF(I4>300000,"High",IF(I4>=100000,"Medium","Low"))'
        },
        {
          code: "L1.5", title: "Conditional formatting",
          sub: "Make data patterns visible instantly with colour — no formulas needed",
          time: "40 min", prereq: "L1.4", type: "Skill",
          dataset: "FMCG Sales — Revenue, Achievement %, Units_Sold",
          tools: ["Highlight rules","Colour scales","Data bars","Icon sets","Custom rule"],
          theory: {
            heading: "Colour reveals patterns formulas cannot",
            body: "Conditional formatting changes a cell's colour, font, or border based on its value — without changing the data itself. A colour scale on revenue instantly shows you which rows are high and which are low, faster than any filter.",
            keypoints: [
              "Home → Conditional Formatting to access all options",
              "Highlight Cell Rules — colour specific values or ranges",
              "Colour Scales — gradient from low to high across the range",
              "Data Bars — mini bar chart inside each cell",
              "Icon Sets — arrows, traffic lights, stars based on value"
            ]
          },
          example: {
            heading: "Three formats on FMCG data",
            steps: [
              "Select Revenue column (I4:I123) → Home → CF → Colour Scales → Red-Yellow-Green",
              "Select Achievement % (K4:K123) → Highlight Cell Rules → Less Than → 100 → Red fill",
              "Select Units_Sold (G4:G123) → Data Bars → Blue data bar",
              "Now scan the sheet — patterns are immediately visible without reading numbers"
            ]
          },
          guided: [
            "Select I4:I123 (Revenue column data only)",
            "Home tab → Conditional Formatting → Color Scales → choose Red-White-Green (3rd option)",
            "Select K4:K123 (Achievement % column)",
            "Home → CF → Highlight Cell Rules → Less Than → type 100 → choose Red fill → OK",
            "Select G4:G123 (Units Sold)",
            "Home → CF → Data Bars → choose a blue solid bar",
            "Now look at the sheet — you can see performance patterns instantly"
          ],
          task: {
            heading: "Your turn",
            description: "Apply these three conditional formats:",
            questions: [
              "YoY Growth column (L): icon set with green up arrow for positive, red down arrow for negative",
              "Unit Price column (H): top 10 highest prices highlighted in gold/yellow",
              "Revenue column: add a custom rule — bold font for any revenue above ₹4,00,000"
            ],
            answer_hint: "For icon sets: CF → Icon Sets → Directional → 3 Arrows. For Top 10: CF → Top/Bottom Rules → Top 10 Items"
          },
          answers: ["CF → Icon Sets → 3 Arrows (Colored)","CF → Top/Bottom Rules → Top 10 Items → Yellow fill","CF → New Rule → Format only cells that contain → Cell Value greater than 400000 → Bold format"],
          hint: "For the custom bold rule: Home → CF → New Rule → 'Format only cells that contain' → Cell Value → greater than → 400000 → click Format → Font → Bold → OK"
        },
        {
          code: "L1.6", title: "Your first chart",
          sub: "Turn numbers into a visual story that anyone can understand in seconds",
          time: "55 min", prereq: "L1.5", type: "Skill",
          dataset: "FMCG Sales — Brand, Revenue, Month columns",
          tools: ["Bar chart","Line chart","Chart title","Axis labels","Data labels","Legend"],
          theory: {
            heading: "Charts communicate what numbers cannot",
            body: "A table of 120 numbers tells nobody anything. The right chart tells the story in 3 seconds. Use a bar chart to compare categories side by side. Use a line chart to show how something changes over time. Always add a title and axis labels — an untitled chart is useless.",
            keypoints: [
              "Bar chart = comparing categories (brand A vs brand B vs brand C)",
              "Line chart = showing change over time (revenue in Jan, Feb, Mar...)",
              "Always: chart title, axis labels, remove unnecessary gridlines",
              "Data labels show exact values on each bar/point",
              "Keep it simple — one message per chart"
            ]
          },
          example: {
            heading: "Revenue by brand — bar chart",
            steps: [
              "First create a summary: in a new area, list brands in column A, SUMIF revenue in column B",
              "Select those two columns → Insert → Charts → Clustered Bar",
              "Click the chart title → type 'Revenue by Brand'",
              "Right-click bars → Add Data Labels",
              "Click gridlines → Delete (less clutter = clearer message)"
            ]
          },
          guided: [
            "Create a summary table in columns P and Q: brand names in P4:P13, =SUMIF(D$4:D$123,P4,I$4:I$123) in Q4",
            "Drag Q4 formula down to Q13 for all 10 brands",
            "Select P4:Q13 → Insert tab → Bar Chart → Clustered Bar",
            "Click chart title → rename it 'Total Revenue by Brand'",
            "Right-click any bar → Add Data Labels",
            "Click on the legend → Delete (brand names are already on axis)"
          ],
          task: {
            heading: "Your turn — build 2 charts",
            description: "Chart 1: Revenue by Brand (bar). Chart 2: HUL monthly trend (line).",
            questions: [
              "Bar chart: total revenue per brand — formatted with title, labels, clean colours",
              "For the line chart, first build a 12-row summary: Month (Jan–Dec) vs HUL revenue using SUMIFS",
              "Line chart: HUL revenue month by month — title 'HUL Monthly Revenue Trend', label both axes",
              "Both charts should look like something you'd put in a presentation"
            ],
            answer_hint: "For HUL monthly: =SUMIFS(I$4:I$123,D$4:D$123,\"HUL\",B$4:B$123,R4) where R4 has the month name"
          },
          answers: ["SUMIF per brand → Insert Bar Chart → format title + labels","SUMIFS for HUL per month → Insert Line Chart → title both axes"],
          hint: 'For HUL monthly data: in a new table put month names (Jan, Feb...) in one column and =SUMIFS(I$4:I$123,D$4:D$123,"HUL",B$4:B$123,R4) in the next. This filters by both HUL brand AND the specific month.'
        },
        {
          code: "L1.7", title: "Formatting for clarity",
          sub: "Make your work look professional and ready to share with anyone",
          time: "40 min", prereq: "L1.6", type: "Skill",
          dataset: "FMCG Sales — full dataset",
          tools: ["₹ Currency","Percentage","Borders","Cell styles","Auto-fit columns","Print layout"],
          theory: {
            heading: "Formatting is communication",
            body: "Professional formatting is not about decoration — it's about making data faster to read and easier to trust. When you open a well-formatted spreadsheet, you immediately know what everything is. When you open an unformatted one, you waste time figuring it out. Good analysts format as a matter of professional pride.",
            keypoints: [
              "Number formats: ₹#,##0 for currency, 0.0% for percentages, #,##0 for large numbers",
              "Headers: bold, coloured background, bottom border",
              "Column widths: auto-fit so nothing is cut off",
              "Consistent font size (10–11pt for data, 12pt for headers)",
              "Alternating row colours make long tables readable"
            ]
          },
          example: {
            heading: "Formatting the FMCG dataset properly",
            steps: [
              "Select Revenue column → Ctrl+1 → Number → Custom → type ₹#,##0",
              "Select Achievement % column → Ctrl+1 → Percentage → 1 decimal place",
              "Select header row 3 → Bold → background colour navy → font colour white",
              "Select all columns → right-click column headers → Column Width → AutoFit",
              "Select data rows → alternating fill: rows 4,6,8... light grey, rows 5,7,9... white"
            ]
          },
          guided: [
            "Select I4:I123 → right-click → Format Cells → Number → Custom → enter: ₹#,##0 → OK",
            "Select H4:H123 (Unit Price) → same process → Custom → ₹#,##0.00",
            "Select K4:K123 (Achievement %) → Format Cells → Percentage → 1 decimal → OK",
            "Select row 3 (headers) → Bold → Home → Fill Color → dark navy",
            "Select all data → Home → Format → AutoFit Column Width",
            "Add a thick bottom border to row 3: select row 3 → Border → Thick Bottom"
          ],
          task: {
            heading: "Your turn",
            description: "Format the full FMCG dataset to a standard you could send to your Ipsos manager:",
            questions: [
              "All revenue and price columns formatted as ₹ currency with comma separators",
              "Achievement % and YoY Growth formatted as % with 1 decimal",
              "Header row: bold, dark background, white text, thick bottom border",
              "All columns auto-fitted to content width",
              "Units sold column formatted with comma separators (no currency symbol)"
            ],
            answer_hint: "Format each column type individually. Use Ctrl+1 to open Format Cells dialog quickly."
          },
          answers: ["Ctrl+1 → Custom → ₹#,##0 for revenue columns","Ctrl+1 → Percentage → 1 decimal for % columns","Header row: Bold + Fill Color + Font White + Thick Bottom border","Select all → Format → AutoFit Column Width","Units: Ctrl+1 → Number → 0 decimal, use 1000 separator"],
          hint: "Fastest way: format one cell correctly, then select the whole column and use Ctrl+Y (repeat last action) or Format Painter (paintbrush icon in Home tab) to copy the format to other cells."
        },
        {
          code: "L1.P", title: "Project — Monthly Sales Report",
          sub: "Combine all 7 skills to build a complete, professional one-page sales report",
          time: "90 min", prereq: "L1.1–L1.7", type: "Project",
          dataset: "FMCG Sales — all 120 rows, all columns",
          tools: ["SUM","COUNTIF","IF","Bar chart","Conditional formatting","Professional formatting"],
          theory: {
            heading: "Project brief",
            body: "You are a junior analyst at a market research firm. Your manager needs a one-page monthly sales summary by end of day. You have the raw FMCG Sales data. Deliver a clean, professional report that a senior person can read and understand in under 2 minutes.",
            keypoints: [
              "This is not a test — it is a real analyst task",
              "Combine everything from Lessons 1.1 to 1.7",
              "Quality matters: formatting, labels, clarity",
              "Your output should look like it came from a professional analyst"
            ]
          },
          example: {
            heading: "What the completed report contains",
            steps: [
              "Section 1: KPI Summary Block — Total revenue, avg revenue, total units, row count",
              "Section 2: Brand Performance Table — all 10 brands with revenue, count, avg, status label",
              "Section 3: Revenue by Brand Chart — clean bar chart, titled and labelled",
              "Section 4: Full formatted data table — currency, %, borders, headers done properly"
            ]
          },
          guided: [
            "Create a new sheet called 'Report'",
            "Add a title: 'FMCG Sales Monthly Summary Report'",
            "Build the KPI block (4 metrics) in rows 4–8",
            "Build the brand table using SUMIF, COUNTIF, AVERAGEIF, and IF for status",
            "Insert the bar chart from your chart lesson below the table",
            "Format everything: consistent fonts, colours, currency formats, borders"
          ],
          task: {
            heading: "Deliver all four sections",
            description: "Your completed report must include:",
            questions: [
              "KPI block: Total Revenue (SUM), Average Revenue (AVERAGE), Total Units (SUM), No. of Rows (COUNT)",
              "Brand table: for each of 10 brands — total revenue, row count, avg achievement %, status label (IF)",
              "Revenue chart: bar chart of brand revenue, properly formatted",
              "Full data: the FMCG sheet formatted to professional standard (currency, %, borders)"
            ],
            answer_hint: "Start with the KPI block, then the brand table, then the chart, then format everything last"
          },
          answers: ["KPI: =SUM, =AVERAGE, =SUM on Units, =COUNT","Brand table: =SUMIF, =COUNTIF, =AVERAGEIF, =IF for status","Chart: SUMIF summary → Insert Bar → format","Formatting: all columns, all number types"],
          hint: "Build section by section. Don't try to do everything at once. KPI block first (30 min), brand table second (30 min), chart third (15 min), final formatting last (15 min)."
        }
      ]
    },
    {
      id: 2,
      code: "L2",
      title: "Analysis",
      subtitle: "Requires Level 1 · Multi-dataset analysis",
      color: "#854F0B",
      light: "#FAC775",
      dark: "#633806",
      badge: "Excel Analyst",
      weeks: "3 weeks",
      hours: "~15 hrs",
      dataset: "FMCG + Country + Weather",
      lessons: [
        { code:"L2.1", title:"Conditional sums", sub:"SUMIF and SUMIFS — add up only the rows that match your criteria", time:"50 min", prereq:"L1.P", type:"Skill", dataset:"FMCG Sales — Brand, Region, Revenue", tools:["SUMIF","SUMIFS","Multiple criteria"],
          theory:{ heading:"Sum with conditions", body:"SUMIF adds numbers from one column where another column matches a condition. SUMIFS adds numbers where MULTIPLE conditions are all true.", keypoints:["=SUMIF(condition_range, criteria, sum_range)","=SUMIFS(sum_range, range1, criteria1, range2, criteria2)","SUMIFS can handle 2, 3, 4 or more conditions","Always check: is sum range the same size as condition range?"] },
          example:{ heading:"FMCG revenue filtering", steps:['=SUMIF(D4:D123,"HUL",I4:I123) → total HUL revenue','=SUMIFS(I4:I123,D4:D123,"HUL",F4:F123,"North") → HUL revenue in North only','=SUMIFS(I4:I123,F4:F123,"South",K4:K123,">=100") → on-target South revenue'] },
          guided:["In K4 type label: HUL Total Revenue","In L4 type: =SUMIF(D$4:D$123,\"HUL\",I$4:I$123)","In K5 type: HUL North Revenue","In L5 type: =SUMIFS(I$4:I$123,D$4:D$123,\"HUL\",F$4:F$123,\"North\")","Add 3 more combinations of your choice"],
          task:{ heading:"Your turn", description:"Build a 10-row brand revenue table using SUMIF:", questions:["Total revenue for each of the 10 brands (SUMIF)","Revenue for each brand in North region only (SUMIFS)","Revenue for each brand where Achievement % >= 100 (SUMIFS)"], answer_hint:"Use SUMIF for single condition, SUMIFS for multiple. Lock ranges with $ signs before dragging." },
          answers:["=SUMIF(D$4:D$123,P4,I$4:I$123)","=SUMIFS(I$4:I$123,D$4:D$123,P4,F$4:F$123,\"North\")","=SUMIFS(I$4:I$123,D$4:D$123,P4,K$4:K$123,\">=100\")"],
          hint:"The key difference: SUMIF has 3 arguments (condition range, criteria, sum range). SUMIFS flips it: sum range comes FIRST, then pairs of condition range + criteria." },
        { code:"L2.2", title:"Conditional averages", sub:"AVERAGEIF and AVERAGEIFS — find the mean for specific groups", time:"45 min", prereq:"L2.1", type:"Skill", dataset:"FMCG Sales — Brand, Region, Achievement %", tools:["AVERAGEIF","AVERAGEIFS"],
          theory:{ heading:"Group averages", body:"AVERAGEIF works exactly like SUMIF but returns the average instead of the sum. Same syntax, different output.", keypoints:["=AVERAGEIF(condition_range, criteria, average_range)","=AVERAGEIFS(avg_range, range1, criteria1, range2, criteria2)","Returns the mean of all matching rows","Returns #DIV/0! if no rows match — wrap in IFERROR"] },
          example:{ heading:"Average achievement by brand and region", steps:['=AVERAGEIF(D4:D123,"HUL",K4:K123) → avg achievement % for HUL','=AVERAGEIFS(K4:K123,D4:D123,"HUL",F4:F123,"North") → HUL North avg achievement','=IFERROR(AVERAGEIF(D4:D123,"Unknown",K4:K123),0) → handles no-match safely'] },
          guided:["Build a brand × region average achievement table","Rows: 10 brands. Columns: North, South, East, West, Central","Cell formula: =AVERAGEIFS(K$4:K$123,D$4:D$123,$B4,F$4:F$123,C$3)","This is a cross-tab of averages — your first one!"],
          task:{ heading:"Your turn", description:"Build these averages:", questions:["Average achievement % per brand (AVERAGEIF)","Average revenue per region (AVERAGEIF on revenue using region as condition)","Average unit price for rows where achievement >= 100 vs < 100 (AVERAGEIFS)"], answer_hint:"Use AVERAGEIF for 1 condition. AVERAGEIFS for 2+. Check that ranges are same length." },
          answers:["=AVERAGEIF(D$4:D$123,P4,K$4:K$123)","=AVERAGEIF(F$4:F$123,Q4,I$4:I$123)","=AVERAGEIFS(H$4:H$123,K$4:K$123,\">=100\") and =AVERAGEIFS(H$4:H$123,K$4:K$123,\"<100\")"],
          hint:"AVERAGEIF returns #DIV/0! if no rows match. Wrap it: =IFERROR(AVERAGEIF(...),'No data') to handle this gracefully in your tables." },
        { code:"L2.3", title:"Lookup basics", sub:"VLOOKUP — pull data from another table using a matching key", time:"55 min", prereq:"L2.2", type:"Skill", dataset:"Country Info + FMCG Sales", tools:["VLOOKUP","HLOOKUP","Exact match","IFERROR"],
          theory:{ heading:"Looking up values across tables", body:"VLOOKUP searches for a value in the first column of a table and returns a value from another column in the same row. Think of it like a search: 'find India in the country table, then give me its GDP'.", keypoints:["=VLOOKUP(lookup_value, table_range, column_number, 0)","The 0 at the end = exact match (always use 0 for text lookups)","lookup_value must exist in the FIRST column of table_range","column_number: 1=first col, 2=second col, 3=third col","Wrap in IFERROR to handle missing values: =IFERROR(VLOOKUP(...),'Not found')"] },
          example:{ heading:"Looking up country data", steps:['=VLOOKUP("India",B4:K23,4,0) → India\'s population from Country table','=VLOOKUP(A2,CountryTable,5,0) → GDP for whichever country is in A2','=IFERROR(VLOOKUP(A2,B$4:K$23,4,0),"Not found") → safe version'] },
          guided:["Open the Country Info sheet","In a new area, create a lookup tool: type any country name in cell M4","In N4 type: =IFERROR(VLOOKUP(M4,B4:K23,4,0),\"Country not found\")","This looks up population for whatever country you type in M4","Change M4 to different countries and watch N4 update automatically","Add more rows: GDP in N5, Life Expectancy in N6 — change column number accordingly"],
          task:{ heading:"Your turn", description:"Build a country profile lookup tool:", questions:["Create a tool where you type a country name in one cell","It automatically shows: Population, GDP, Life Expectancy, HDI Score, Internet % — all from the Country Info table","Test it with 5 different countries","Add IFERROR so typing an invalid name shows 'Country not found' instead of #N/A"], answer_hint:"Each KPI needs its own VLOOKUP with a different column number. Column 4 = Population, 5 = GDP, etc." },
          answers:["=IFERROR(VLOOKUP($M$4,B$4:K$23,4,0),\"Not found\") for Population","Change column number (4,5,8,11,10) for each metric","$M$4 locks the lookup cell so all formulas reference the same input"],
          hint:"Count the columns in the Country table to find the right column number. B=1, C=2, D=3, E=4 (Population), F=5 (GDP). Or just hover over the column header to see its letter, then count from your table's starting column." },
        { code:"L2.4", title:"Smarter lookups", sub:"INDEX + MATCH — the upgrade that beats VLOOKUP in every situation", time:"55 min", prereq:"L2.3", type:"Skill", dataset:"Country Info — all columns", tools:["INDEX","MATCH","Two-way lookup"],
          theory:{ heading:"Why INDEX-MATCH beats VLOOKUP", body:"VLOOKUP can only look to the right and breaks when you insert columns. INDEX-MATCH looks in any direction, never breaks, and is faster on large datasets. Once you learn this, you'll rarely go back to VLOOKUP.", keypoints:["=MATCH(value, range, 0) → finds the ROW position of a value","=INDEX(range, row_num) → returns the value at that row position","Combined: =INDEX(result_range, MATCH(lookup_value, lookup_range, 0))","Can look LEFT (VLOOKUP cannot)","Never breaks when columns are inserted or reordered"] },
          example:{ heading:"Finding extremes in Country data", steps:["=MATCH(\"India\",B4:B23,0) → row position of India in the name column","=INDEX(E4:E23,5) → returns the 5th value in the GDP column","=INDEX(B4:B23,MATCH(MAX(E4:E23),E4:E23,0)) → country with highest GDP","=INDEX(B4:B23,MATCH(MIN(H4:H23),H4:H23,0)) → country with lowest life expectancy"] },
          guided:["In an empty cell type: =MATCH(\"India\",B4:B23,0) — note the row number returned","In the next cell type: =INDEX(E4:E23,MATCH(\"India\",B4:B23,0)) — returns India's GDP","Now combine with MAX: =INDEX(B4:B23,MATCH(MAX(E4:E23),E4:E23,0)) — richest country","Build a 'Top Country' table: highest GDP, highest life expectancy, highest HDI, lowest literacy"],
          task:{ heading:"Your turn", description:"Use INDEX-MATCH to answer:", questions:["Which country has the highest HDI score?","Which country has the lowest life expectancy?","Which country has the highest internet penetration?","Build a lookup tool like your VLOOKUP one — but use INDEX-MATCH instead. It should not break if you reorder columns."], answer_hint:"=INDEX(B$4:B$23,MATCH(MAX(column),column,0)) for finding the country name associated with a max value." },
          answers:["=INDEX(B$4:B$23,MATCH(MAX(K$4:K$23),K$4:K$23,0)) for highest HDI","=INDEX(B$4:B$23,MATCH(MIN(H$4:H$23),H$4:H$23,0)) for lowest life exp","=INDEX(B$4:B$23,MATCH(MAX(J$4:J$23),J$4:J$23,0)) for highest internet"],
          hint:"The pattern is always: =INDEX(name_column, MATCH(target_value, value_column, 0)). For MAX/MIN, put the MAX/MIN formula inside the MATCH: MATCH(MAX(column), column, 0)" },
        { code:"L2.5", title:"Pivot tables", sub:"Summarise hundreds of rows into a clean cross-tab in under 30 seconds", time:"60 min", prereq:"L2.4", type:"Skill", dataset:"FMCG Sales — all columns", tools:["PivotTable","Rows/Columns/Values","Slicers","Refresh","Calculated field"],
          theory:{ heading:"The most powerful Excel feature", body:"A pivot table summarises large datasets into a cross-tab without any formulas. It takes a 120-row dataset and instantly tells you total revenue by brand, by region, by month — or any combination. Every analyst uses pivot tables daily.", keypoints:["Insert → PivotTable → select data range → new sheet","Drag fields to Rows, Columns, or Values","Values default to COUNT — change to SUM for numbers","Slicers are visual filter buttons — great for dashboards","Right-click any cell → Refresh to update after data changes"] },
          example:{ heading:"Brand × Region revenue pivot", steps:["Select A3:L123 in FMCG Sales → Insert → PivotTable → New Worksheet","Drag 'Brand' to Rows area","Drag 'Region' to Columns area","Drag 'Revenue' to Values area → it auto-sums","You now have a brand × region revenue cross-tab with grand totals"] },
          guided:["Select your FMCG data → Insert → PivotTable → OK","In the field list, drag Brand to Rows","Drag Region to Columns","Drag Revenue to Values (it will show Sum of Revenue)","Right-click any value → Value Field Settings → choose Sum if it shows Count","Insert → Slicer → select Month → click months to filter the whole pivot","Add a second pivot: Units_Sold instead of Revenue"],
          task:{ heading:"Your turn", description:"Build 3 pivot tables:", questions:["Pivot 1: Brand (rows) × Region (columns) → Sum of Revenue with a Month slicer","Pivot 2: Category (rows) → Sum of Revenue, Count of rows, Average Achievement % (3 values)","Pivot 3: Month (rows) → Sum of Revenue, add a % of column total calculated field"], answer_hint:"For multiple value fields: drag multiple items to the Values area. For % of total: right-click a value → Show Values As → % of Column Total" },
          answers:["Drag Brand to Rows, Region to Columns, Revenue to Values. Then Insert Slicer → Month","Drag Category to Rows. Drag Revenue, then Units_Sold, then Achievement% all to Values","Drag Month to Rows, Revenue to Values. Right-click value → Show Values As → % of Grand Total"],
          hint:"To add % of total alongside the actual sum: drag Revenue to Values TWICE. Format one as Sum, right-click the other → Show Values As → % of Grand Total. Now you see both number and % side by side." },
        { code:"L2.6", title:"Text functions", sub:"Clean, split and combine text data the way real analysts handle messy inputs", time:"45 min", prereq:"L2.5", type:"Skill", dataset:"FMCG Sales + Country Info — text columns", tools:["LEFT","RIGHT","MID","LEN","TRIM","CONCATENATE","UPPER/LOWER"],
          theory:{ heading:"Text is messy — functions clean it", body:"Real data always has text problems: extra spaces, inconsistent capitalisation, codes buried in longer strings. Text functions let you extract exactly the part you need or fix the mess automatically.", keypoints:["=LEFT(text,n) → first n characters","=RIGHT(text,n) → last n characters","=MID(text,start,n) → n characters from position start","=LEN(text) → count of characters","=TRIM(text) → removes extra spaces","=CONCATENATE(a,b) or =a&\" \"&b → joins text"] },
          example:{ heading:"Text operations on FMCG data", steps:["=LEFT(D4,3) → first 3 chars of brand name (e.g. 'HUL' → 'HUL', 'Dabur' → 'Dab')","=LEN(E4) → how many characters in the category name","=TRIM(D4) → clean any accidental spaces from brand name","=UPPER(D4)&\" - \"&F4 → 'HUL - North' combining brand and region","=MID(A4,3,3) → extract characters 3,4,5 from the Row_ID"] },
          guided:["In a new column, type =TRIM(D4) for each brand name — fixes invisible spacing issues","In the next column: =UPPER(D4) — all caps version","Then: =D4&\" | \"&F4 — combines Brand + Region with a separator","Then: =LEFT(D4,1)&RIGHT(F4,1) — creates a short code like 'H-N' for HUL-North","Check LEN of brand names: =LEN(D4) — are any longer than expected?"],
          task:{ heading:"Your turn", description:"Four text tasks:", questions:["Create a 'Brand Code' column: first 3 letters of brand + first 2 letters of region (e.g. HUL+No = HULNO)","Create a 'Full Label' column: Brand + ' | ' + Region + ' | ' + Month (e.g. HUL | North | Jan)","Clean the Category column using TRIM and PROPER (title case)","Count characters in each SKU name in the SKU dataset — which is the longest SKU name?"], answer_hint:"For Brand Code: =LEFT(D4,3)&LEFT(F4,2). For Full Label use & to join with text separators in quotes." },
          answers:["=LEFT(D4,3)&LEFT(F4,2)","=D4&\" | \"&F4&\" | \"&B4","=PROPER(TRIM(E4))","=LEN(E4) on SKU name column, then =MAX() to find longest"],
          hint:"The & operator joins text. Any fixed text you want to add (like ' | ') must go in quotes. =A1&\" - \"&B1 would give you the content of A1, then a dash, then the content of B1." },
        { code:"L2.7", title:"Date and time", sub:"Work with dates the way Excel stores them — as numbers you can calculate with", time:"45 min", prereq:"L2.6", type:"Skill", dataset:"FMCG Sales — Month column", tools:["TODAY","YEAR","MONTH","DAY","DATEDIF","Arithmetic"],
          theory:{ heading:"Dates are just numbers in disguise", body:"Excel stores every date as a number (days since 1 January 1900). This means you can subtract two dates to get the number of days between them, add 30 to get a date 30 days later, and use date functions to extract year, month, and day.", keypoints:["=TODAY() → today's date (updates automatically)","=YEAR(date) → extracts the year","=MONTH(date) → extracts month number (1–12)","=DAY(date) → extracts day number","=DATEDIF(start,end,\"M\") → months between two dates","date1 - date2 → number of days between them"] },
          example:{ heading:"Date calculations", steps:["=TODAY() → current date, updates every time you open the file","=YEAR(A4) → extracts 2024 from a 2024-01-15 date","=MONTH(A4) → returns 1 for January","=TEXT(A4,\"MMM\") → returns 'Jan' as text","=TODAY()-A4 → days since that date","=DATEDIF(A4,TODAY(),\"M\") → months since that date"] },
          guided:["In FMCG data, the Month column (B) has month names not dates","Add a Month Number column: =MATCH(B4,{\"Jan\",\"Feb\",\"Mar\",\"Apr\",\"May\",\"Jun\",\"Jul\",\"Aug\",\"Sep\",\"Oct\",\"Nov\",\"Dec\"},0)","Add a Quarter column: =IF(MATCH(B4,{\"Jan\",\"Feb\",\"Mar\",\"Apr\",\"May\",\"Jun\",\"Jul\",\"Aug\",\"Sep\",\"Oct\",\"Nov\",\"Dec\"},0)<=3,\"Q1\",IF(MATCH(B4,{\"Jan\",\"Feb\",\"Mar\",\"Apr\",\"May\",\"Jun\",\"Jul\",\"Aug\",\"Sep\",\"Oct\",\"Nov\",\"Dec\"},0)<=6,\"Q2\",IF(MATCH(B4,{\"Jan\",\"Feb\",\"Mar\",\"Apr\",\"May\",\"Jun\",\"Jul\",\"Aug\",\"Sep\",\"Oct\",\"Nov\",\"Dec\"},0)<=9,\"Q3\",\"Q4\")))"],
          task:{ heading:"Your turn", description:"Date calculations in the FMCG dataset:", questions:["Add a 'Month Num' column converting month name (Jan, Feb...) to number (1, 2...)","Add a 'Quarter' column: Q1 (Jan-Mar), Q2 (Apr-Jun), Q3 (Jul-Sep), Q4 (Oct-Dec)","Add a 'Half Year' column: H1 (months 1–6) or H2 (months 7–12)","Using SUMIFS, calculate total revenue for each quarter"], answer_hint:"For month number use MATCH with an array of month names. For Quarter use nested IF checking the month number." },
          answers:["=MATCH(B4,{\"Jan\",\"Feb\",\"Mar\",\"Apr\",\"May\",\"Jun\",\"Jul\",\"Aug\",\"Sep\",\"Oct\",\"Nov\",\"Dec\"},0)","=CHOOSE(INT((month_num-1)/3)+1,\"Q1\",\"Q2\",\"Q3\",\"Q4\") or nested IF","=IF(month_num<=6,\"H1\",\"H2\")","=SUMIFS(I$4:I$123,quarter_col,\"Q1\") for each quarter"],
          hint:"=CHOOSE(n,v1,v2,v3,v4) returns the nth value from the list. So =CHOOSE(INT((MONTH_NUM-1)/3)+1,\"Q1\",\"Q2\",\"Q3\",\"Q4\") converts any month number to its quarter cleanly." },
        { code:"L2.8", title:"Named ranges and Tables", sub:"Write formulas that read like English and never break when data changes", time:"40 min", prereq:"L2.7", type:"Skill", dataset:"FMCG Sales — full dataset", tools:["Define Name","Excel Tables Ctrl+T","Structured references"],
          theory:{ heading:"Make formulas readable and robust", body:"Named ranges let you name a range (like 'Revenue') and use that name in formulas instead of cell addresses. Excel Tables auto-expand when you add rows — your formulas never need updating. These two features together make your workbook maintainable.", keypoints:["Formulas Manager: Ctrl+F3 to define and manage names","=SUM(Revenue) reads better than =SUM(I4:I123)","Excel Tables: Ctrl+T → turns range into a structured table","Table formulas: =SUM(FMCGSales[Revenue]) — updates when rows are added","Structured references use [ColumnName] syntax"] },
          example:{ heading:"Named ranges and table formulas", steps:["Select I4:I123 → Name Box (top left, shows cell address) → type 'Revenue' → Enter","Now =SUM(Revenue) works anywhere in the workbook","Select A3:L123 → Ctrl+T → give table name 'FMCGSales'","=SUM(FMCGSales[Revenue]) → sum of revenue column, auto-updates","=COUNTIF(FMCGSales[Brand],\"HUL\") → cleaner COUNTIF using table"] },
          guided:["Select I4:I123 → click the Name Box → type Revenue → Enter","Select G4:G123 → name it Units","Select D4:D123 → name it Brand","Select F4:F123 → name it Region","Select K4:K123 → name it Achievement","Now rewrite your L1.2 summary: =SUM(Revenue), =AVERAGE(Revenue), =MIN(Revenue) etc","Then convert the whole dataset to a Table: select A3:L123 → Ctrl+T → name it FMCGData"],
          task:{ heading:"Your turn", description:"Rebuild with named ranges:", questions:["Name all 9 data columns with meaningful names","Rewrite your COUNTIF formula using named ranges: =COUNTIF(Brand,\"HUL\")","Rewrite your SUMIF using named ranges: =SUMIF(Brand,\"HUL\",Revenue)","Convert data to Excel Table. Add a new row of data. Confirm your SUMIF formula auto-includes it."], answer_hint:"Name Box is the white box showing the current cell address (e.g. A1) in the top-left of the screen. Click it, type the name, press Enter." },
          answers:["Name Box → type name for each column range","=COUNTIF(Brand,\"HUL\") after naming D column","=SUMIF(Brand,\"HUL\",Revenue) after naming I column","Ctrl+T → name table → add row → formula auto-expands"],
          hint:"To see all your named ranges: Formulas tab → Name Manager. You can edit, delete, or check the range each name refers to. If a name has a wrong range, fix it here." },
        { code:"L2.P", title:"Project — Regional Dashboard", sub:"Build a dynamic multi-metric dashboard using formulas, pivots, and charts", time:"90 min", prereq:"L2.1–L2.8", type:"Project", dataset:"FMCG Sales + Country Info", tools:["SUMIFS","AVERAGEIF","VLOOKUP","PivotTable","Chart","Formatting"],
          theory:{ heading:"Project brief", body:"Your manager needs a regional performance dashboard for tomorrow's brand review meeting. It must show performance by region and brand, update automatically when data changes, and be presentation-ready.", keypoints:["This combines all Level 2 skills in a real analyst output","Use SUMIFS for the regional summary","Use VLOOKUP to pull country context data","Use a pivot table for the cross-tab","The dashboard must be on a single clean sheet"] },
          example:{ heading:"Dashboard structure", steps:["Sheet 1: Regional KPI summary (SUMIFS per region)","Sheet 2: Brand × Region cross-tab (Pivot Table with slicer)","Sheet 3: Trend chart (line chart, SUMIFS by month)","Sheet 4: Raw data (formatted FMCG Sales)"] },
          guided:["New sheet 'Dashboard' → build a 5-region summary table using SUMIFS","Add brand lookup section using VLOOKUP from a brand reference table","Insert pivot table → Brand rows, Region columns, Revenue values, Month slicer","Create a revenue trend line chart","Format everything to presentation standard"],
          task:{ heading:"Deliver all four sections", description:"Your dashboard must include:", questions:["Regional summary table: 5 regions × Revenue, Units, Achievement %, Count — all SUMIFS","Brand lookup: type a brand name, see its total revenue, top region, avg achievement","Pivot cross-tab: Brand × Region with Month slicer","Trend chart: monthly total revenue line, properly labelled and formatted"], answer_hint:"Build section by section. Regional table first, then pivot, then chart, then lookup tool." },
          answers:["=SUMIFS(Revenue,Region,B4) for each metric","=SUMIF(Brand,lookup_cell,Revenue) + AVERAGEIF for avg","PivotTable → drag fields → add slicer","SUMIFS by month → line chart"],
          hint:"For the dashboard to feel professional: put all charts and KPIs on one 'Dashboard' sheet that links to data on other sheets. Use named ranges so formulas read clearly." }
      ]
    },
    {
      id: 3,
      code: "L3",
      title: "Market Research",
      subtitle: "Requires Level 2 · Industry-specific skills",
      color: "#185FA5",
      light: "#B5D4F4",
      dark: "#0C447C",
      badge: "Market Research Analyst",
      weeks: "3 weeks",
      hours: "~15 hrs",
      dataset: "Survey CATI + SKU + Consumer",
      lessons: [
        { code:"L3.1",title:"Understanding survey data",sub:"How CATI survey data is structured and what every column means",time:"45 min",prereq:"L2.P",type:"Skill",dataset:"Survey CATI — 200 respondents, 14 cols",tools:["Data types","Closed questions","Scales","Codes"],theory:{heading:"Survey data structure",body:"In CATI survey data, each row is one respondent and each column is one question. Understanding the data type of each column determines which analysis method to use.",keypoints:["Nominal = categories with no order (brand, gender, city)","Ordinal = categories with order (satisfaction 1-5, NPS 0-10)","Binary = yes/no questions (awareness, recommendation)","Each question type needs different analysis"]},example:{heading:"Reading the Survey CATI dataset",steps:["Open Survey CATI sheet — 200 rows = 200 respondents","Q1 = Awareness (Aware/Not Aware) — binary","Q3 = Satisfaction (1–5 scale) — ordinal","Q4 = NPS (0–10) — ordinal scale","Q5 = Brand Preference — nominal (category)"]},guided:["Open Survey CATI sheet","For each column (Q1 to Q8) write: is it Nominal, Ordinal, or Binary in a notes cell","Count total respondents: =COUNTA(A4:A203)","Count blank cells in Q3: =COUNTBLANK(I4:I203)","Calculate % complete for Q3: =(COUNTA(I4:I203)/200)*100"],task:{heading:"Your turn",description:"Survey audit:",questions:["Label each of Q1–Q8 as Nominal, Ordinal, or Binary","Count total respondents in the dataset","For each question, count how many respondents answered (not blank)","Calculate % response rate for each question","Identify which question has the most non-responses"],answer_hint:"Use COUNTA to count non-blank cells, COUNTBLANK for blanks. Response rate = COUNTA/200*100"},answers:["Q1=Binary, Q2=Ordinal, Q3=Ordinal, Q4=Ordinal, Q5=Nominal, Q6=Ordinal, Q7=Nominal, Q8=Binary","=COUNTA(A4:A203) → 200","=COUNTA per question column","=(COUNTA(col)/200)*100","Compare rates to find lowest"],hint:"Response rate matters in research. If a question has <80% response rate, results may not be representative. Always check this before reporting."},
        { code:"L3.2",title:"Frequency tables",sub:"Count responses and calculate % share — the foundation of every research report",time:"50 min",prereq:"L3.1",type:"Skill",dataset:"Survey CATI — Q1 Awareness, Q5 Brand Pref",tools:["COUNTIF","% share","Frequency layout","Rounding"],theory:{heading:"Frequency tables = topline basics",body:"A frequency table shows how many respondents chose each option and what percentage that represents. This is the most common output in market research. Every topline starts with frequency tables.",keypoints:["Count of each response value using COUNTIF","% = count / total * 100","Total row must always sum to 100%","Round % to 1 decimal place","Always show base size (n=200)"]},example:{heading:"Q1 Awareness frequency table",steps:['Create two rows: "Aware" and "Not Aware"','=COUNTIF(G4:G203,"Aware") → count of aware respondents','=COUNTIF(G4:G203,"Not Aware") → count of not aware','% Aware = count/200*100','Check: both % should add to 100']},guided:["In a new area, build a Q1 Awareness table","Row 1: Aware | =COUNTIF(G$4:G$203,\"Aware\") | =B1/200*100","Row 2: Not Aware | =COUNTIF(G$4:G$203,\"Not Aware\") | =B2/200*100","Row 3: Total | =SUM(B1:B2) | =SUM(C1:C2) → should be 200 and 100","Format % column to 1 decimal: 0.0%","Repeat for Q5 Brand Preference (5 brand options)"],task:{heading:"Your turn",description:"Build 3 frequency tables:",questions:["Q1 Awareness: Aware vs Not Aware (counts + %)","Q5 Brand Preference: all 5 brands (counts + %, sorted high to low)","Q7 Purchase Channel: all 4 channels (counts + %)","Add base size note: 'Base: All respondents (n=200)'"],answer_hint:"Sort the brand table by % descending — highest preferred brand first. This is standard topline format."},answers:["COUNTIF for each value, divide by 200 for %","=COUNTIF(K$4:K$203,brand) for each of 5 brands, sort by % desc","=COUNTIF(M$4:M$203,channel) for each channel","Add 'Base: n=200' below each table as text"],hint:"Always check your frequency table by summing the Count column — it must equal 200 (total respondents). If it doesn't, you have a formula error or a response value you haven't counted."},
        { code:"L3.3",title:"Cross-tabulation",sub:"Break down responses by demographics — the heart of market research analysis",time:"60 min",prereq:"L3.2",type:"Skill",dataset:"Survey CATI — Q1 × Gender, Q3 × City_Tier",tools:["COUNTIFS","2-way table","Column %","Base sizes"],theory:{heading:"Cross-tabs reveal who thinks what",body:"A cross-tab shows how one question (like Awareness) varies across different groups (like Male vs Female). It answers the question: 'Is awareness higher among men or women?' Every market research report has cross-tabs.",keypoints:["Rows = question response options","Columns = demographic groups (gender, age, city tier)","Each cell = COUNTIFS with 2 conditions","Column % = cell count / column total × 100","Always show base size per column: how many in each group"]},example:{heading:"Q1 Awareness × Gender cross-tab",steps:['=COUNTIFS(D$4:D$203,"Male",G$4:G$203,"Aware") → aware males','=COUNTIFS(D$4:D$203,"Female",G$4:G$203,"Aware") → aware females','Column % Male Aware = aware_male_count / total_male_count × 100','Base: Male = COUNTIF(Gender,"Male"), Female = COUNTIF(Gender,"Female")']},guided:["Build a 2×2 table: rows = Aware/Not Aware, columns = Male/Female","Cell B3: =COUNTIFS(D$4:D$203,\"Male\",G$4:G$203,\"Aware\")","Cell C3: =COUNTIFS(D$4:D$203,\"Female\",G$4:G$203,\"Aware\")","Row for Not Aware: same pattern","Base row: =COUNTIF(D$4:D$203,\"Male\") and Female","% row: =B3/B5*100 for male aware %","Format to 1 decimal"],task:{heading:"Your turn",description:"Build 2 cross-tabs:",questions:["Awareness (Q1) × Gender: counts + column % + base sizes","Satisfaction (Q3 rating 1-5) × City Tier (Tier 1/2/3): show avg rating per tier using AVERAGEIFS","Add colour: highlight % above 60% in green, below 40% in red using conditional formatting","Compare: are Tier 1 cities more aware than Tier 3?"],answer_hint:"For the awareness × gender table, column % = cell count / column base × 100. Base for Male = COUNTIF of all male respondents."},answers:["COUNTIFS(Gender,M,Q1,Aware) / COUNTIF(Gender,M) *100","AVERAGEIFS(Q3,CityTier,\"Tier 1\") for each tier","CF highlight rules on the % cells","Compare Tier 1 vs Tier 3 awareness %"],hint:"In a cross-tab, always use COLUMN percentages (not row percentages) unless asked otherwise. Column % shows: of all males, what % are aware? Row % would show: of all aware people, what % are male? — different questions."},
        { code:"L3.4",title:"Likert scales and ratings",sub:"Analyse satisfaction and rating questions the way research agencies do",time:"50 min",prereq:"L3.3",type:"Skill",dataset:"Survey CATI — Q3 Satisfaction (1–5 scale)",tools:["AVERAGE","Top 2 Box","Bottom 2 Box","Scale frequency"],theory:{heading:"Scale questions need special treatment",body:"A 1-5 satisfaction scale gives you three key outputs: mean score (average), Top 2 Box % (% rating 4 or 5), and Bottom 2 Box % (% rating 1 or 2). All three together give a complete picture of sentiment.",keypoints:["Mean score: =AVERAGE(Q3 column) — overall feeling","Top 2 Box (T2B): % rating 4 or 5 — positive sentiment","Bottom 2 Box (B2B): % rating 1 or 2 — negative sentiment","Full frequency table: count + % for each of 1,2,3,4,5","T2B is the most reported metric in FMCG research"]},example:{heading:"Q3 Satisfaction analysis",steps:["=AVERAGE(I4:I203) → mean satisfaction score","=COUNTIF(I4:I203,\">=4\")/200*100 → Top 2 Box %","=COUNTIF(I4:I203,\"<=2\")/200*100 → Bottom 2 Box %","Frequency: =COUNTIF(I4:I203,1) for rating 1, repeat for 2,3,4,5","Check: all 5 counts sum to 200"]},guided:["Build Q3 Satisfaction analysis block","Row 1: Mean Score | =AVERAGE(I$4:I$203)","Row 2: Top 2 Box % | =COUNTIF(I$4:I$203,\">=4\")/200*100","Row 3: Bottom 2 Box % | =COUNTIF(I$4:I$203,\"<=2\")/200*100","Row 4-8: Frequency table for ratings 1–5 with count and %","Format mean to 2 decimals, % to 1 decimal"],task:{heading:"Your turn",description:"Full scale analysis for Q3:",questions:["Mean score for all 200 respondents","Top 2 Box % (ratings 4+5) and Bottom 2 Box % (ratings 1+2)","Full frequency table: count and % for each rating 1,2,3,4,5","Mean score separately for Male vs Female (AVERAGEIF by gender)","Mean score separately for Tier 1, Tier 2, Tier 3 cities (AVERAGEIFS)"],answer_hint:"T2B = COUNTIF(>=4)/200*100. B2B = COUNTIF(<=2)/200*100. For subgroup means use AVERAGEIF or AVERAGEIFS."},answers:["=AVERAGE(I4:I203)","=COUNTIF(I4:I203,\">=4\")/200*100 and <=2 version","=COUNTIF(I4:I203,1) through 5, divide by 200","=AVERAGEIF(Gender,\"Male\",Q3) and Female","=AVERAGEIFS(Q3,CityTier,\"Tier 1\") for each tier"],hint:"Remember T2B means ratings 4 AND 5 combined. Use =COUNTIF(range,\">=4\") to catch both in one formula. Similarly B2B is <=2. These shortcuts are used throughout real Ipsos reports."},
        { code:"L3.5",title:"NPS calculation",sub:"Net Promoter Score — the single most used metric in modern market research",time:"45 min",prereq:"L3.4",type:"Skill",dataset:"Survey CATI — Q4 NPS (0–10 scale)",tools:["COUNTIF ranges","% Promoters","% Detractors","NPS formula"],theory:{heading:"NPS: one number that tells everything",body:"NPS = % Promoters (rated 9-10) minus % Detractors (rated 0-6). Passives (7-8) are excluded from the calculation but matter for context. NPS ranges from -100 to +100. Above 0 is good, above 50 is excellent.",keypoints:["Promoters: rated 9 or 10 → will actively recommend","Passives: rated 7 or 8 → satisfied but not enthusiastic","Detractors: rated 0–6 → unhappy, may spread negative word","NPS = (Promoters/Total - Detractors/Total) × 100","Above 50 = Excellent, 0–50 = Good, below 0 = Poor"]},example:{heading:"NPS from Q4 column",steps:["=COUNTIF(J4:J203,\">=9\") → Promoter count","=COUNTIF(J4:J203,\"<=6\") → Detractor count","=COUNTIF(J4:J203,\">=7\")-COUNTIF(J4:J203,\">=9\") → Passive count","NPS = (Promoters-Detractors)/200*100","Check: Promoters + Passives + Detractors = 200"]},guided:["Build NPS analysis block","Promoters: =COUNTIF(J$4:J$203,\">=9\")","Detractors: =COUNTIF(J$4:J$203,\"<=6\")","Passives: =200-Promoters-Detractors (or COUNTIFS)","Promoter %: =Promoters/200*100","Detractor %: =Detractors/200*100","NPS: =Promoter%-Detractor%","Classification: =IF(NPS>=50,\"Excellent\",IF(NPS>=0,\"Good\",\"Poor\"))"],task:{heading:"Your turn",description:"Full NPS analysis:",questions:["Count of Promoters, Passives, and Detractors","% for each group (should sum to 100%)","Final NPS score","NPS classification (Excellent / Good / Poor)","Bonus: NPS separately for Male vs Female using COUNTIFS"],answer_hint:"NPS = Promoter% - Detractor%. Passives don't count toward the score but DO count toward the total base."},answers:["=COUNTIF(J4:J203,\">=9\"), <=6, and 7-8 range","Divide each by 200*100","=PromoterPct - DetractorPct","=IF(NPS>=50,\"Excellent\",IF(NPS>=0,\"Good\",\"Poor\"))","=COUNTIFS(D4:D203,\"Male\",J4:J203,\">=9\") etc"],hint:"To count passives (7 and 8 only): =COUNTIFS(J4:J203,\">=7\",J4:J203,\"<=8\"). This counts cells that are both >= 7 AND <= 8, which covers exactly 7 and 8."},
        { code:"L3.6",title:"Topline report",sub:"Build a complete one-page research summary the way agencies deliver to clients",time:"65 min",prereq:"L3.5",type:"Skill",dataset:"Survey CATI — all questions",tools:["Linked summary sheet","Named ranges","Chart per KPI","Professional layout"],theory:{heading:"The topline is the analyst's most important output",body:"A topline report is delivered within 24–48 hours of fieldwork ending. It summarises the most important findings on 1–2 pages. Every number must link to the data — never hardcode. The layout must be clean enough for a client to read without guidance.",keypoints:["One sheet, all key metrics visible without scrolling","Every number is a formula linked to raw data","Standard sections: sample info, awareness, satisfaction, NPS, brand preference","Charts are small and embedded, not on separate sheets","Font size 10–12, consistent formatting throughout"]},example:{heading:"Topline structure",steps:["Section A: Study info — client name, study name, date, sample size","Section B: Awareness — overall %, by gender, by city tier","Section C: Usage — frequency distribution chart","Section D: Satisfaction — mean + T2B + frequency table","Section E: NPS — score, classification, promoter/detractor split","Section F: Brand Preference — ranked frequency table"]},guided:["New sheet 'Topline'","Row 1: Study title, date, n=200","Section headers in bold navy","Link each metric: =SurveyCAT!NPS_cell for the NPS score","Use small charts: insert → bar chart → resize to fit in the cell area","Apply consistent formatting: navy headers, clean borders, 10pt font throughout"],task:{heading:"Your turn",description:"Deliver a complete topline:",questions:["Study info header: title, date, sample size","Awareness section: overall %, Male %, Female %, each City Tier %","Satisfaction section: mean, T2B%, B2B%, distribution chart","NPS section: score, classification, promoter/detractor/passive %","Brand preference section: ranked table of all 5 brands"],answer_hint:"All numbers must be formulas linked to your Survey CATI data — not typed manually. If data changes, topline must auto-update."},answers:["Text header + =COUNTA for n=","COUNTIF/COUNTIFS formulas linked from Survey sheet","AVERAGE + COUNTIF T2B/B2B linked formulas + bar chart","NPS formula + IF classification","COUNTIF per brand sorted by frequency"],hint:"Build the topline on a new sheet and link to your survey data using = and the sheet name: =\'Survey CATI\'!B5. When data updates, re-run all formulas. Never hardcode a research finding — it will be wrong after the next wave."},
        { code:"L3.7",title:"SKU-level analysis",sub:"Read and interpret retail SKU data the way FMCG brand teams need it",time:"55 min",prereq:"L3.6",type:"Skill",dataset:"SKU Data — 100 SKUs, all columns",tools:["Market share %","Price laddering","SUMIF by brand","Distribution gap"],theory:{heading:"SKU analysis tells the retail story",body:"SKU analysis answers three questions: What sells most? At what price? Where is it available? Market share shows relative performance. Price laddering shows the brand's price architecture. Distribution gap shows where a SKU is missing.",keypoints:["Market share % = SKU revenue / total revenue × 100","Price ladder = SKUs sorted by MRP within each brand","Distribution gap = SKUs with distribution below 50%","Brand share = sum of all SKUs for that brand / total","Pack size vs revenue analysis shows which formats drive business"]},example:{heading:"SKU market share calculation",steps:["=K4/SUM(K$4:K$103)*100 → % revenue share for each SKU","=SUMIF(Brand,\"HUL\",Revenue)/SUM(Revenue)*100 → HUL total brand share","Sort by MRP within brand → this is the price ladder","=COUNTIF(Distribution,\"<50\") → how many SKUs have low distribution","SUMIFS(Revenue,Distribution,\"<50\") → revenue at risk from low distribution"]},guided:["Add 'Market Share %' column: =K4/SUM(K$4:K$103)*100","Build brand share table: =SUMIF(B$4:B$103,brand,K$4:K$103)/SUM(K$4:K$103)*100","Sort all SKUs by MRP within brand → this IS the price ladder","Flag low distribution: =IF(M4<50,\"Gap\",\"OK\") in new column","Count gaps per brand: =COUNTIFS(B$4:B$103,brand,flag_col,\"Gap\")"],task:{heading:"Your turn",description:"Build 3 SKU outputs:",questions:["Brand market share table: all 8 brands ranked by revenue share %","Price ladder: filter to one brand, sort by MRP, show pack size and price","Distribution gap analysis: which brand has most SKUs below 50% distribution?","Bonus: calculate revenue at risk = sum of revenue for all sub-50% distribution SKUs"],answer_hint:"For brand share: SUMIF per brand / SUM(all revenue) * 100. For distribution gap: COUNTIFS with brand name and distribution <50."},answers:["=SUMIF(B$4:B$103,brand,K$4:K$103)/SUM(K$4:K$103)*100","Filter by brand → sort column G (MRP) ascending","=COUNTIFS(B$4:B$103,brand,M$4:M$103,\"<50\")","=SUMIFS(K$4:K$103,M$4:M$103,\"<50\")"],hint:"For the price ladder, filter the SKU sheet to one brand first (use Filter), then sort the filtered result by MRP (column G). This shows that brand's pack size vs price architecture clearly."},
        { code:"L3.8",title:"Data cleaning for research",sub:"Fix messy survey data before analysis — the most important skill no one teaches",time:"50 min",prereq:"L3.7",type:"Skill",dataset:"Synthetic messy survey file",tools:["Remove duplicates","TRIM","IFERROR","Find & Replace","Blank handling"],theory:{heading:"Real data is always messy",body:"Before you analyse anything, you must clean the data. Real CATI data comes with duplicates, blank cells, inconsistent codes (Male/male/M/MALE), trailing spaces, and errors. Analysis on dirty data produces wrong results.",keypoints:["Remove duplicates: Data → Remove Duplicates","TRIM: removes leading, trailing, and double spaces","PROPER/UPPER/LOWER: standardise capitalisation","Find & Replace: fix inconsistent codes","IFERROR: handle blank cells in formulas gracefully","Always keep original data — work on a copy"]},example:{heading:"Common cleaning operations",steps:["Remove duplicates: Data → Remove Duplicates → select ID column → OK","Fix spacing: =TRIM(A4) in a helper column, paste as values, delete original","Standardise gender: Find & Replace 'male' → 'Male', 'M' → 'Male'","Handle blanks in COUNTIF: =IFERROR(COUNTIF(...),'N/A')","Check for outliers: =IF(Q3>5,\"ERROR\",Q3) flags any rating above 5"]},guided:["Make a copy of the Survey CATI sheet — name it 'Clean'","On the Clean sheet: Data → Remove Duplicates → check Resp_ID column","Add TRIM helper column for Gender: =TRIM(PROPER(D4))","Copy the helper column → Paste Special → Values Only → delete original column","Use Find & Replace to standardise any inconsistent gender codes","Check Q3 for out-of-range values: =COUNTIF(I4:I203,\">5\") should be 0"],task:{heading:"Your turn",description:"Clean a messy dataset:",questions:["Remove all duplicate respondent IDs","Standardise Gender column: all values must be exactly 'Male' or 'Female'","Standardise City_Tier: all must be exactly 'Tier 1', 'Tier 2', or 'Tier 3'","Check Q3 Satisfaction for out-of-range values (must be 1–5 only)","After cleaning: re-run your Q1 frequency table and confirm it still adds to 200"],answer_hint:"Clean data in this order: remove duplicates, fix capitalisation, standardise values, check ranges. Always work on a copy."},answers:["Data → Remove Duplicates → Resp_ID","TRIM+PROPER then paste values, then Find & Replace M/F → Male/Female","Same approach for City Tier","=COUNTIF(I4:I203,\">5\")+COUNTIF(I4:I203,\"<1\") should be 0","Re-run COUNTIF frequency table on clean data"],hint:"Always duplicate your raw data tab before cleaning. Name it 'Raw_DO_NOT_EDIT'. Work only on copies. This is a rule at every serious research firm including Ipsos."},
        { code:"L3.P",title:"Project — Full CATI Study Report",sub:"Deliver a complete market research report from raw survey data — as if it's a real client job",time:"120 min",prereq:"L3.1–L3.8",type:"Project",dataset:"Survey CATI + SKU Data — all rows",tools:["Frequency tables","Cross-tabs","NPS","Topline","SKU share","Charts"],theory:{heading:"Project brief",body:"A client ran a CATI survey among 200 urban consumers about their FMCG brand usage and preferences. They also have SKU sales data. They need a full report delivered by tomorrow morning. This is your complete Level 3 deliverable.",keypoints:["Clean the data first (L3.8)","Build all analytics (L3.2–L3.7)","Present in a topline format (L3.6)","Treat this as real work — quality matters"]},example:{heading:"Report structure",steps:["Sheet 1: Topline — all KPIs in one page","Sheet 2: Detailed Tables — full cross-tabs","Sheet 3: SKU Analysis — brand share + price ladder","Sheet 4: Clean Data — cleaned survey file","Sheet 5: Raw Data — original, untouched"]},guided:["Clean the data → Sheet 'Clean Data'","Build topline → Sheet 'Topline'","Build detail tables → Sheet 'Detail Tables'","Build SKU analysis → Sheet 'SKU Analysis'","Format everything to client-ready standard"],task:{heading:"Deliver all sections",description:"Your report must include:",questions:["Clean data sheet: no duplicates, standardised codes, checked for errors","Topline sheet: awareness, usage frequency, satisfaction (mean+T2B), NPS, brand preference — all as formulas","Detail tables: awareness × gender, awareness × city tier, satisfaction × city tier cross-tabs","SKU analysis: brand market share, top 10 SKUs by revenue, distribution gap by brand","Professional formatting: consistent fonts, no #REF! errors, all charts titled"],answer_hint:"Start with cleaning, then topline, then detail tables, then SKU. Each section builds on the previous."},answers:["Clean sheet with TRIM/PROPER and Remove Duplicates applied","All topline metrics as formulas linked to Clean sheet","COUNTIFS cross-tabs with column % and base sizes","SUMIF brand shares + COUNTIFS distribution gap","Consistent formatting throughout, zero formula errors"],hint:"When you present this project to your manager, they should be able to change one number in the raw data and see ALL outputs update automatically. If any number is hardcoded, redo it as a formula."}
      ]
    },
    {
      id: 4,
      code: "L4",
      title: "Pro Analyst",
      subtitle: "Requires Level 3 · Job-ready output quality",
      color: "#534AB7",
      light: "#CECBF6",
      dark: "#3C3489",
      badge: "Pro Data Analyst",
      weeks: "2 weeks",
      hours: "~12 hrs",
      dataset: "All datasets",
      lessons: [
        { code:"L4.1",title:"Dynamic dashboards",sub:"Build dashboards that update automatically based on dropdown selections",time:"60 min",prereq:"L3.P",type:"Skill",dataset:"FMCG Sales + Consumer Behaviour",tools:["OFFSET","Data validation","INDIRECT","Dynamic chart"],theory:{heading:"Dashboards that respond to user input",body:"A dynamic dashboard changes its output based on a dropdown selection — no manual filtering, no copy-pasting. The user selects a brand, and every KPI and chart updates instantly.",keypoints:["Data validation dropdown: Data → Data Validation → List","OFFSET(ref,rows,cols,height,width) → dynamic range","=INDIRECT(text) → converts text to a cell reference","Chart range can be linked to a named formula","One dropdown can drive multiple KPIs and charts simultaneously"]},example:{heading:"Brand selector dashboard",steps:["Create dropdown in B2: Data → Data Validation → List → source = brand list","Named formula 'SelectedBrandRevenue': =SUMIF(Brand,Dashboard!B2,Revenue)","In KPI block: =SelectedBrandRevenue — updates when dropdown changes","Chart data range: use OFFSET to make it dynamic","Test: change dropdown and confirm all metrics update"]},guided:["New sheet 'Dashboard'","Dropdown in B3: Data Validation → List → type all 10 brand names","KPI cells: =SUMIF(FMCGData[Brand],B3,FMCGData[Revenue]) for revenue","Add: =COUNTIF(FMCGData[Brand],B3) for count, =AVERAGEIF for avg achievement","Create a bar chart of this brand's monthly revenue (SUMIFS by month)","Verify: change dropdown brand → all KPIs and chart update instantly"],task:{heading:"Your turn",description:"Build a full dynamic brand dashboard:",questions:["Dropdown selector for any of the 10 brands","KPI block: total revenue, units sold, avg achievement %, row count — all update with dropdown","Monthly trend chart: shows selected brand's revenue month by month","Region breakdown: shows selected brand's revenue by region (5 bars)","Add a second dropdown for Year (if applicable) or Region filter"],answer_hint:"Key formula pattern: =SUMIF(BrandColumn, DropdownCell, RevenueColumn). Lock the data ranges with $ but NOT the dropdown cell reference."},answers:["Data Validation → List for dropdown","=SUMIF(D$4:D$123,$B$3,I$4:I$123) pattern for each KPI","SUMIFS for monthly data → line chart with dynamic range","SUMIFS for regional data → bar chart","Second dropdown with SUMIFS using both conditions"],hint:"To make the chart dynamic: define a named range using OFFSET that references the dropdown cell. Then use that named range as the chart's data source. When the dropdown changes, the named range changes, and the chart updates."},
        { code:"L4.2",title:"What-if analysis",sub:"Model business scenarios and find target values automatically",time:"55 min",prereq:"L4.1",type:"Skill",dataset:"FMCG Sales — Revenue and pricing",tools:["Data Table","Goal Seek","Scenario Manager"],theory:{heading:"Answer 'what if' questions automatically",body:"What-if analysis tools let you test scenarios without manually changing values. Goal Seek finds what input produces your target output. Data Tables show outputs for a range of input values simultaneously.",keypoints:["Goal Seek: Set target cell to target value by changing input cell","1-way Data Table: one input variable, many outputs","2-way Data Table: two input variables, one output at intersection","Scenario Manager: save and compare named scenarios","All three update formulas automatically — no manual work"]},example:{heading:"Price sensitivity analysis",steps:["Goal Seek: Tools → Goal Seek → Set Revenue cell to 10,00,000 → By changing Unit_Price cell","1-way table: column of prices (100,200,300...) → Revenue formula in top row → select both → Data → What-If → Data Table → column input","2-way table: prices in rows, units in columns → revenue formula in corner → Data Table → row input + column input"]},guided:["In a fresh area, create a simple model: Unit Price in B2, Units Sold in B3, Revenue = B2*B3 in B4","Goal Seek: what unit price gives revenue of ₹5,00,000? Data → What-If → Goal Seek → Set B4=500000 by changing B2","1-way data table: prices 50 to 500 in column A, =B4 in B header → select A:B → Data Table → column input = B2","See revenue at every price point instantly"],task:{heading:"Your turn",description:"Three what-if analyses:",questions:["Goal Seek: what average unit price is needed to hit ₹10,00,000 total revenue for HUL?","1-way data table: show HUL revenue at unit prices ₹50, 100, 150, 200, 250, 300","2-way data table: revenue at combinations of 5 price points × 5 units-sold levels","Scenario Manager: save 3 scenarios — Pessimistic (price -20%), Base, Optimistic (price +20%)"],answer_hint:"For Goal Seek on FMCG data: first create a formula that calculates total HUL revenue from a variable price. Then use Goal Seek to find the price."},answers:["Build HUL revenue model → Goal Seek → set revenue → change price","1-way table: prices in column → revenue formula at top → Data Table → column input cell","2-way: prices in row header, units in column header, revenue formula at intersection → both inputs","Scenario Manager: Scenarios → Add → name each → change price cell"],hint:"Data Tables are under Data tab → What-If Analysis → Data Table. For a 1-way table: put your variable values in a column, put your output formula one row up and one column to the right, select the whole range, then run Data Table with your variable cell as the 'column input'."},
        { code:"L4.3",title:"Advanced lookups",sub:"XLOOKUP, FILTER, SORT, UNIQUE — the modern Excel functions that replace old workarounds",time:"55 min",prereq:"L4.2",type:"Skill",dataset:"SKU Data + Country Info",tools:["XLOOKUP","XMATCH","FILTER","SORT","UNIQUE"],theory:{heading:"Modern Excel lookup functions",body:"XLOOKUP replaces VLOOKUP and INDEX-MATCH in one cleaner formula. FILTER extracts all matching rows dynamically. SORT and UNIQUE work with dynamic arrays. These are available in Excel 365 and Excel 2021.",keypoints:["=XLOOKUP(lookup, lookup_array, return_array) → cleaner than VLOOKUP","=FILTER(array, condition) → extracts all rows matching condition","=SORT(array, sort_col) → returns sorted version","=UNIQUE(array) → returns unique values only","These functions spill results automatically into adjacent cells"]},example:{heading:"Modern lookups on SKU data",steps:["=XLOOKUP(\"SKU001\",A4:A103,E4:E103) → find SKU name by ID","=FILTER(A4:M103,B4:B103=\"HUL\") → all HUL rows extracted dynamically","=SORT(FILTER(A4:M103,B4:B103=\"HUL\"),7,-1) → HUL rows sorted by MRP desc","=UNIQUE(B4:B103) → list of all unique brand names"]},guided:["=XLOOKUP(\"SKU001\",A$4:A$103,E$4:E$103) → find SKU name","=XLOOKUP(\"HUL\",B$4:B$103,K$4:K$103,\"Not found\",0,-1) → find last HUL entry (search from bottom)","=FILTER(A4:M103,M4:M103<50) → all low-distribution SKUs","=SORT(FILTER(A4:M103,B4:B103=\"HUL\"),7,-1) → HUL SKUs sorted by price descending","=UNIQUE(B4:B103) → all unique brands (spills automatically)"],task:{heading:"Your turn",description:"Build advanced lookup tools:",questions:["XLOOKUP tool: type a SKU_ID → see full row details automatically","FILTER: extract all SKUs where distribution < 50% into a separate area","SORT+FILTER: each brand's SKUs sorted by revenue descending (one per brand)","UNIQUE: generate a dynamic list of all brands (updates if new brands added)","Bonus: use XLOOKUP with wildcard to find any SKU containing a keyword"],answer_hint:"FILTER spills into multiple cells automatically — don't try to put it in a merged cell area. Leave enough empty rows below for the results."},answers:["=XLOOKUP(input_cell,A$4:A$103,A$4:M$103)","=FILTER(A4:M103,M4:M103<50)","=SORT(FILTER(A4:M103,B4:B103=brand),11,-1)","=UNIQUE(B4:B103)"],hint:"FILTER, SORT, and UNIQUE are 'spill functions' — their results spread across as many cells as needed. Make sure the destination area is empty. If you get a #SPILL! error, something is blocking the spill range — clear those cells."},
        { code:"L4.4",title:"Consumer segmentation",sub:"Group consumers by behaviour and profile each segment the way researchers do it",time:"65 min",prereq:"L4.3",type:"Skill",dataset:"Consumer Behaviour — 180 consumers",tools:["AVERAGEIFS","COUNTIFS","Segment profiling","Pivot by segment"],theory:{heading:"Segmentation is the foundation of strategy",body:"Segmentation divides consumers into groups based on shared characteristics. Each group (segment) has a distinct profile: what they spend, how often they buy, which channel they use. This tells brands where to focus their marketing.",keypoints:["Segments in this dataset: Low/Medium/High Churn Risk","Profile each segment: avg income, avg spend, avg basket, top channel, loyalty card %","Compare segments: which has highest spending? lowest basket?","AVERAGEIFS and COUNTIFS power all segment profiling","Pivot table gives the fastest segment overview"]},example:{heading:"Profiling churn risk segments",steps:["=AVERAGEIFS(E4:E183,K4:K183,\"High\") → avg income for High Churn segment","=AVERAGEIFS(F4:F183,K4:K183,\"Low\") → avg spend for Low Churn segment","=COUNTIFS(K4:K183,\"High\",I4:I183,\"Yes\")/COUNTIF(K4:K183,\"High\")*100 → % with loyalty card in High Churn","Pivot: Churn Risk in rows, avg of each metric in values"]},guided:["Build segment profile table: rows = Low/Medium/High, columns = key metrics","=AVERAGEIFS(E$4:E$183,K$4:K$183,B4) for avg monthly income","=AVERAGEIFS(F$4:F$183,K$4:K$183,B4) for avg category spend","=AVERAGEIFS(G$4:G$183,K$4:K$183,B4) for avg visits per month","=AVERAGEIFS(H$4:H$183,K$4:K$183,B4) for avg basket size","Loyalty %: =COUNTIFS(K$4:K$183,B4,I$4:I$183,\"Yes\")/COUNTIF(K$4:K$183,B4)*100"],task:{heading:"Your turn",description:"Build a full segment profile:",questions:["3-segment profile table: Low/Medium/High churn risk","Metrics per segment: avg income, avg spend, avg visits, avg basket, loyalty card %, top channel","Which segment spends most? Which visits most often?","Add conditional formatting: highlight the highest value in each metric row in green","Write a 3-sentence interpretation: what does each segment look like?"],answer_hint:"Use AVERAGEIFS for numeric metrics, COUNTIFS/COUNTIF ratio for % metrics. The top channel per segment needs MODE equivalent — use a pivot or COUNTIFS comparison."},answers:["AVERAGEIFS per segment for each numeric metric","COUNTIFS(segment,churn)/COUNTIF(segment) for loyalty %","Compare averages across segments","CF: Highlight Max in each row green","Interpretation: written text based on your numbers"],hint:"For 'top channel per segment' (categorical, not numeric): you can't average a category. Instead, use COUNTIFS to count how many in each segment use each channel, then manually find the highest. Or use a pivot table filtered by segment."},
        { code:"L4.5",title:"Presentation-quality charts",sub:"Format charts to the standard clients and senior managers actually expect",time:"50 min",prereq:"L4.4",type:"Skill",dataset:"Any Level 3 output",tools:["Chart formatting","Colour palettes","Remove chartjunk","Annotation","Export"],theory:{heading:"Charts must communicate ONE thing clearly",body:"The difference between a professional chart and a default Excel chart is not about complexity — it's about removing everything that doesn't help the reader. Default Excel charts have gridlines, borders, grey backgrounds, 3D effects, and legends that confuse. Professional charts have none of these.",keypoints:["Remove: gridlines, chart border, grey background, 3D effects, unnecessary legend","Add: descriptive title, axis labels, data labels on key bars","Colour: 2–3 colours maximum, meaningful not random","Annotation: add a text box with the key finding","Font: same font as report, consistent sizes"]},example:{heading:"Before and after — NPS chart",steps:["Default NPS chart: 3D pie, grey background, 'Series 1' in legend, no title","Step 1: Delete chart border → right-click → Format Chart Area → No Border","Step 2: Delete gridlines → click gridline → Delete","Step 3: Change title to the actual finding: '68% are Promoters'","Step 4: Add data labels → right-click bars → Add Data Labels","Step 5: Change colours: Promoters = green, Passives = grey, Detractors = red"]},guided:["Take your NPS chart from L3.5","Delete: gridlines, chart border, legend (if labels are on bars)","Right-click chart area → Format → No fill, No border","Change title to the insight not the metric: 'NPS score of +34 — above category average'","Change bar colours: Promoters green (#1A7A4A), Passives grey, Detractors red (#C0392B)","Add a text box: '34% are Detractors — action required'","Resize chart to fit neatly in your topline layout"],task:{heading:"Your turn",description:"Redesign 3 charts from your Level 3 project:",questions:["NPS chart: donut or stacked bar with Promoter/Passive/Detractor breakdown, title = the finding","Satisfaction distribution: horizontal bar chart (easier to read than vertical for scales)","Brand preference: sorted bar chart (highest to lowest), only 2 colours, clean labels","All three must look like they belong in a professional client presentation"],answer_hint:"Less is more. Every element you remove makes the data clearer. Start by deleting: gridlines, borders, background colour, 3D effects, unnecessary legend entries."},answers:["Remove gridlines/border, change title to finding, use meaningful colours","Horizontal bar, sorted, 2 colours max, data labels","Sorted descending, brand colours or single colour, no legend if bars are labelled","Consistent font, size, and colour palette across all 3 charts"],hint:"To sort bars in a chart: sort the SOURCE DATA (the table the chart reads from). If your summary table is sorted highest to lowest, the chart bars will be too. Don't try to reorder bars inside the chart itself."},
        { code:"L4.6",title:"Automating with basic macros",sub:"Record and run macros to save time on tasks you do every single week",time:"60 min",prereq:"L4.5",type:"Skill",dataset:"FMCG Sales + Survey CATI",tools:["Record macro","Run macro","Button assignment","Basic VBA reading"],theory:{heading:"Macros do the repetitive work for you",body:"A macro records your exact actions (clicks, formatting, sorting) and replays them with one click. You don't need to know programming. The Macro Recorder writes the VBA code for you — you just record, stop, and run.",keypoints:["Developer tab → Record Macro → do your actions → Stop Recording","Alt+F8 → Run Macro to replay","Assign to a button for one-click execution","Never record on live data — always test on a copy","Basic VBA reading: you don't write code, but you can read it to understand what it does"]},example:{heading:"Record a formatting macro",steps:["Developer tab → Record Macro → name it 'FormatFMCG'","Do your formatting: bold headers, currency format, auto-fit columns, add border","Stop Recording","Alt+F8 → select FormatFMCG → Run → formatting replays automatically","Insert → Shapes → Button → assign FormatFMCG macro → label it 'Format Data'"]},guided:["Enable Developer tab: File → Options → Customize Ribbon → check Developer","Developer → Record Macro → name 'FormatReport'","Do these actions: select row 3 → bold → navy fill → white text → thick bottom border → auto-fit all columns → stop","Alt+F8 → FormatReport → Run → see it replay","Draw a button on your sheet → assign the macro → test it on a fresh unformatted sheet"],task:{heading:"Your turn",description:"Build 2 useful macros:",questions:["Macro 1: 'FormatData' — applies all your standard formatting to any raw FMCG data dump in one click","Macro 2: 'SortByRevenue' — sorts the data by Revenue column descending","Assign both macros to buttons on the sheet","Test: paste raw unformatted data → click FormatData button → formatting applies instantly","Open the VBA editor (Alt+F11) → look at your macro code — try to read what it does (don't edit it)"],answer_hint:"Record macros on a test copy of your data. Macros record absolute cell references by default — they will always act on the same cells unless you use Relative References mode."},answers:["Record: select headers → format → auto-fit → stop → assign to button","Record: click Revenue column header → sort Z to A → stop → assign to button","Insert Shape → right-click → Assign Macro","Test on fresh data sheet","Alt+F11 to open VBA editor — read the Sub FormatData() code"],hint:"If your macro formats the wrong cells (because it recorded absolute references), re-record it with 'Use Relative References' enabled (in Developer tab, click this button BEFORE recording). Relative reference macros work from wherever the cursor is, not a fixed location."},
        { code:"L4.C",title:"Capstone — Full Analyst Portfolio",sub:"Build a complete portfolio piece that demonstrates every skill from Level 1 to Level 4",time:"180 min",prereq:"L4.1–L4.6",type:"Project",dataset:"All 6 datasets combined",tools:["Dynamic dashboard","CATI topline","SKU analysis","Segmentation","Macros","All skills"],theory:{heading:"This is your portfolio",body:"The capstone is not a test — it is a portfolio piece. It shows potential employers or clients the full range of your Excel and market research skills in one file. Build it as if you are presenting it to a client for the first time.",keypoints:["4 deliverable sections: Dashboard, Research Report, SKU Analysis, Consumer Segments","Every number must be a formula — zero hardcoded values","Professional formatting throughout — no default Excel styling","Macros for repetitive operations","Include a cover sheet and table of contents"]},example:{heading:"Portfolio structure",steps:["Sheet 1: Cover — your name, title, date, summary of contents","Sheet 2: Executive Dashboard — dynamic brand selector, KPIs, charts (Level 4)","Sheet 3: CATI Topline Report — full topline with cross-tabs (Level 3)","Sheet 4: SKU Analysis — brand share, price ladder, distribution gaps (Level 3)","Sheet 5: Consumer Segments — 3-segment profile with interpretation (Level 4)","Sheet 6–7: Clean Data and Raw Data"]},guided:["Build Cover sheet first — sets the professional tone","Build Executive Dashboard — dynamic dropdown, 4 KPIs, 2 charts","Build CATI Topline — clean, linked to clean survey data","Build SKU Analysis — market share, price ladder, gap analysis","Build Consumer Segments — AVERAGEIFS profile table + interpretation","Add FormatAll macro button on cover sheet"],task:{heading:"Deliver the complete portfolio",description:"Your portfolio must include:",questions:["Cover sheet: professional title, your name, date, contents list","Executive Dashboard: dropdown brand selector, 4 KPIs, monthly trend chart, region breakdown chart","CATI Topline: awareness, satisfaction (mean+T2B), NPS, brand preference — all as formulas","SKU Analysis: brand market share ranked, top 10 SKUs, distribution gap table","Consumer Segments: 3-segment profile, metrics per segment, 1-paragraph interpretation per segment","At least 1 working macro button"],answer_hint:"Spend 40 min on Dashboard, 40 min on Topline, 30 min on SKU, 30 min on Segments, 20 min on cover and final formatting."},answers:["Cover sheet with contents","SUMIF/SUMIFS + dynamic charts","COUNTIF/COUNTIFS linked topline","SUMIF brand shares + COUNTIFS gaps","AVERAGEIFS profiles + interpretation text","Recorded macro on a button"],hint:"Portfolio quality tip: go back through every sheet before you submit and ask: 'If I was looking at this for the first time, would I understand it in 30 seconds?' If the answer is no, improve the title, add axis labels, or simplify the layout."}
      ]
    }
  ]
};
