# Implementation Log

This document tracks completed features and implementations for the NYC Baby Names visualization project.

---

## ✅ Completed Features

### 1. Documentation Cleanup
**File:** `docs/prompt-guide.md`

**What was done:**
- Fixed improperly formatted JSON example from the API response
- Added proper JSON syntax highlighting with code fences
- Made the API response structure clear and readable

**Example:**
```json
[
  {
    "brth_yr": "2021",
    "gndr": "MALE",
    "ethcty": "HISPANIC",
    "nm": "Liam",
    "cnt": "446",
    "rnk": "1"
  }
]
```

---

### 2. Query Parameter Support on DataSketch Page
**File:** `src/pages/DataSketch.jsx`

**What was done:**
- Imported `useSearchParams` from `react-router-dom` (line 2)
- Added gender filter reading from URL query parameters (line 82)
- Modified API call to include gender filter when present (line 93)
- Added `genderFilter` to useEffect dependency array for re-fetching on filter change (line 112)
- Added visual indicator showing current filter with "Clear filter" link (lines 120-131)

**How it works:**
- URL: `/data?gender=male` → Shows only male names
- URL: `/data?gender=female` → Shows only female names
- URL: `/data` → Shows all names (no filter)

**Technical details:**
- Query parameter is converted to uppercase to match API requirements: `gndr=MALE` or `gndr=FEMALE`
- Filter badge is color-coded (blue for male, pink for female)
- Component automatically re-fetches data when URL parameter changes

---

### 3. Gender Filter Links on Home Page
**File:** `src/pages/Home.jsx`

**What was done:**
- Added new "Filter by Gender" section with three styled buttons (lines 32-89)
- Created links that navigate to DataSketch with appropriate query parameters

**Links created:**
1. **Male Names** → `/data?gender=male` (Blue button)
2. **Female Names** → `/data?gender=female` (Pink button)
3. **All Names** → `/data` (Gray button)

**Styling:**
- Buttons use flexbox layout with gap spacing
- Color-coded to match the visualization colors
- Responsive design with flex-wrap
- Section has light blue background to distinguish it from examples

---

## API Integration

**Base API URL:**
```
https://data.cityofnewyork.us/resource/25th-nujf.json
```

**Query Parameters Used:**
- `brth_yr=2021` - Filter to 2021 births
- `$order=cnt DESC` - Sort by count (descending)
- `$limit=10` - Return top 10 results
- `gndr=MALE` or `gndr=FEMALE` - Filter by gender (optional)

**Example API Calls:**
- All names: `...json?brth_yr=2021&$order=cnt DESC&$limit=10`
- Male only: `...json?brth_yr=2021&$order=cnt DESC&$limit=10&gndr=MALE`
- Female only: `...json?brth_yr=2021&$order=cnt DESC&$limit=10&gndr=FEMALE`

---

## Future Enhancements (Not Implemented)

These are ideas for future development:

- [ ] Add year selector to filter by different birth years
- [ ] Add ethnicity filter options
- [ ] Show comparison between male/female names side-by-side
- [ ] Add animation transitions when switching filters
- [ ] Save user's last filter preference in localStorage
- [ ] Add more visualization options (pie chart, line chart over years)

---

## File Structure

```
/docs
  - prompt-guide.md       # Original requirements and problem statement
  - implementation-log.md # This file - tracks completed work

/src
  /pages
    - Home.jsx           # Landing page with filter links
    - DataSketch.jsx     # Main visualization with query param support
    - BasicSketch.jsx    # Simple p5.js example (unchanged)
  - App.jsx             # Router configuration (unchanged)
```

---

**Last Updated:** 2025-11-10
