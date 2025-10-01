## Frontend Specification: Gertrude’s Hospital LLM Wrapper (Credits Based)

### Overview

A web frontend that lets authenticated users (staff, patients, researchers etc.) submit queries via chat / prompt. The system tracks how much of the hospital’s data is “accessed” (retrieved) in responding, charges or deducts credits accordingly, shows remaining credit balance, and shows source attribution etc.

Target users: hospital staff, doctors, possibly patients (depending on access controls).

---

### Pages / Screens

| Page                         | Purpose / Functionality                                                                                                                                                                              |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Login / Signup**           | Authenticated access; different user roles; perhaps role determines credit limits or pricing plan.                                                                                                   |
| **Dashboard / Home**         | Show user credit balance; recent queries; usage analytics (e.g. how many credits used today/week/month); tips; maybe preset questions.                                                               |
| **Chat / Query Interface**   | Main interface: user types prompt; system retrieves relevant hospital data; returns answer plus sources. Before executing, show an estimate of how many credits query will cost.                     |
| **Credit Purchase / Top-Up** | Interface to buy credits (if applicable) or request more; show pricing tiers.                                                                                                                        |
| **History / Transactions**   | Past queries: prompt / response; credits consumed; timestamp; sources accessed. Also status (success / failed).                                                                                      |
| **Settings / Profile**       | User info; role; credit limits / plan; notification preferences; usage alerts.                                                                                                                       |
| **Admin Panel**              | For hospital administrators: manage user roles; view overall usage; manage credit pricing; view source documents; manage KB; override/adjust credits; issue credits manually; monitor system health. |

---

### Components / UI Elements

- **Prompt Input Box**

  - Allowed formats / placeholders; character count; maybe model selector (if multiple LLMs).
  - “Estimate cost” button or auto-estimate cost as user types (or previews cost when prompt is submitted).

- **Chat / Response Pane**

  - Shows user prompt.
  - Shows assistant response.
  - Shows which data sources used (documents, policies, reports) with links / metadata.
  - Show how many credits were deducted for that query.

- **Credit Balance Display**

  - Visible on all relevant pages (e.g. top bar).
  - Perhaps color coded when low (warning).

- **Estimate / Preview Cost Modal or Inline Badge**

  - Before submitting prompt, display “This will cost approx X credits” based on how much data is expected to be retrieved / tokens used.
  - Option to accept and submit.

- **Error / Edge Case UI**

  - Insufficient credits: disable “Submit query” with message “You do not have enough credits. Please top up.”
  - No data found: “We couldn't find relevant documents; try rephrasing or broaden the query.”
  - System overloaded / slow retrieval: show progress indicators / spinners / approximate wait times.

- **Credit Summary / Analytics**

  - Graphs or tables: credit usage per day/week; average cost per query; most expensive queries; most used KB documents.

- **Source Attribution List**

  - After response, show list of sources (document title, date, maybe snippet) used to construct answer.

---

### Flows & States

1. **User Logs In**
   Role identified, credit balance fetched.

2. **User Enters Prompt**

   - While typing or after prompt composition, system estimates credits.
   - If estimate > available credits → show warning / disable submission.

3. **User Confirms & Submits**

   - UI shows “Query in progress” spinner.
   - Backend executes retrieval + LLM; returns answer + metadata (credits used, sources).

4. **Display Response**

   - Show answer text.
   - Show credits deducted.
   - Show sources.
   - Update credit balance in UI.

5. **User Reviews History**

   - Can click past queries to view prompt, response, credits used, sources.

6. **User Tops Up / Purchases Credits**

   - On purchase page, user selects amount; pays; then credit balance updated.

7. **Admin Overrides**

   - Admin can adjust pricing, grant free credits, set user specific limits etc.

---

### Credit Pricing / Estimation Logic (Frontend-Visible)

To support “credits based on how much data your prompt accesses”, frontend needs to estimate before submitting. Elements include:

- Estimating how many documents / chunks retrieval layer will fetch based on prompt. E.g. similarity threshold or “top K results”.
- Estimating token length of prompt + expected response + context from retrieved data.
- Credit rate = function of (number of tokens retrieved + number of tokens in response) \* model rate + possibly per-document surcharge.

**Credit Estimation Algorithm (frontend pseudocode):**

```text
# Example

User types prompt P

Frontend sends prompt P to backend “estimate-cost” endpoint

Backend returns:

  retrieved_chunks = N     # number of document chunks likely to be accessed
  avg_chunk_token_size = T_chunk
  expected_response_tokens = T_resp

Estimate_total_tokens = tokens(P) + N * T_chunk + T_resp

Credit_rate_per_token = R   # depends on model used

Estimated_credits = Estimate_total_tokens * R

Frontend displays: “Estimated cost: ≈ X credits”

```

Frontend shows Estimated_credits, then on submission, actual cost (which may differ slightly) is shown after.

---

### UI Wireframes / Layout Suggestions

- Top bar: logo, user profile, credit balance.

- Left sidebar: navigation links: Dashboard / Chat / History / Purchase Credits / Settings (if allowed).

- Main area: Chat interface when in “Chat”; list view in History; forms in Settings.

- In Chat view: input box at bottom, submit button; above, scrollable conversation; above that or adjacent: estimate badge; possibly a toggle for “detailed mode” to show or hide source attribution.

- Modal/dialog for “estimate cost” if needed, or inline under prompt input.

---

### State Definitions

- **Idle** — user has not yet submitted anything.
- **Estimating** — estimate request in flight.
- **Ready to Submit** — estimate received and user has enough credits.
- **Submitting / In Progress** — query submitted, waiting for response.
- **Displaying Response** — response + credits used + sources shown.
- **Error State** — e.g. insufficient credits; prompt error; server error.

---

### Role / Permissions Impacting UI Behavior

- **Patient / Public User**: may have limited access to sensitive documents; smaller credit allocation; limited history.
- **Staff / Doctor**: more access, possibly higher credit rate or subsidised.
- **Admin**: access to all history, pricing settings, user credit allocations.

---

### Edge Cases & UX Details

- Prompt too broad → many documents → high estimate → user might abandon; allow refining prompt.
- Prompt triggers retrieving large documents/image/pdf → need to handle timeouts or chunking; maybe warn “large documents will cost more”.
- Language or medical terminology: perhaps offer templates / examples.
- Data freshness: indicate staleness of sources if applicable.
- Accessibility & mobile responsiveness.

---

### UI Data & API Interactions

Frontend will interact with backend via endpoints such as:

- `POST /estimate` — takes prompt + user role, returns estimated credits + sources likely to be used.
- `POST /query` — executes using prompt; returns response + actual credits used + source metadata.
- `GET /history` — list past queries + metadata.
- `GET /credits` — returns current credit balance.
- `POST /purchaseCredits` — starts top-up flow.
- `GET /userProfile`, `PUT /userProfile` etc.

---

If you like, I can put together a “spec document” (with wireframes) for Gertrude’s version, so dev / UI team can implement. Do you want me to build that?
