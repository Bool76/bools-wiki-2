# Predictive | Calculations

Summary - This section is dedicated toward Predictive related calculations

<br>

### Estimates

#### 3 Point Estimates

| Type                              | Calculation                                     |
| --------------------------------- | ----------------------------------------------- |
| Triangular Distribution Estimate  | (Pessimistic + Most Likely + Optimistic) / 3    |
| Beta (Pert) Distribution Estimate | (Pessimistic + 4(Most Likely) + Optimistic) / 6 |
| Standard Deviation                | (Pessimistic - Optimistic) / 6                  |

<br><br>

### Project Budget

| Type                       | Calculation                                                                                          |
| -------------------------- | ---------------------------------------------------------------------------------------------------- |
| Work Package Cost Estimate | Sum of all Activites (for specific work package) + Activity Contingency Reserve (for those activies) |
| Controlled Accounts        | Sum of all Work Package Cost Estimates + Contingency Reserve                                         |
| Cost Baseline              | Sum of Control Accounts                                                                              |
| Project Budget             | Cost Baseline + Management Reserve                                                                   |

<br><br>

### Project Schedule Network Diagram

| Type                | Calculation                           |
| ------------------- | ------------------------------------- |
| Total Float (Slack) | Late Finish (LF) - Early Finish (EF)  |
| Free Float          | Smallest ES of Successor - Current EF |
| Early Finish        | ES + Duration - 1                     |
| Late Start          | LF - Duration + 1                     |

<br><br>

### Control Budget | Earned Value Management | Cost Calculations

| Type                         | Calculation   |
| ---------------------------- | ------------- |
| Budget at Completion (BAC)   | \*given       |
| Actual Cost (AC)             | \*given       |
| Cost Variance (CV)           | EV - AC       |
| Cost Performance Index (CPI) | EV / AC       |
| Estimate at Completion (EAC) | BAC / CPI     |
|                              | BAC + AC - EV |
| Variance at Completion (VAC) | BAC - EAC     |
| Estimate to Completion (ETC) | EAC - AC      |

<br><br>

### Control Budget | Earned Value Management | Value Calculations

| Type                                 | Calculation                 |
| ------------------------------------ | --------------------------- |
| Planning Value (PV)                  | % Planned to Complete x BAC |
| Earned Value (EV)                    | % Complete x BAC            |
| Schedule Variance (SV)               | EV - PV                     |
| Schedule Performance Index (SPI)     | EV / PV                     |
| To Complete Performance Index (TCPI) | (BAC-EV) / (BAC-AC)         |
|                                      | (BAC-EV) / (EAC-AC)         |

<br><br>

### Communcation Management

| Type                           | Calculation     |
| ------------------------------ | --------------- |
| Communication Channels Formula | n x (n - 1) / 2 |
