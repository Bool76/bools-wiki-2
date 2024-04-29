# Planning | Earned Value Management

Overview - This section gives you the tools to understand what your project status is in regards to budget and schedule. By being able to answer those questions, you'll be better equipped to adjust the project as necessary.

<br>

### Plans + Documents + Tools

| Plans                |
| -------------------- |
| Cost Management Plan |

<br>

| Documents |
| --------- |
| tbd       |

<br>

| Tools                    |
| ------------------------ |
| _All calculations below_ |

<br><br>

### Cost Key Concepts

**Budget After Completion (BAC)** - The total budget estimated for a project [dollars]

> The total project budget is $40k

**Actual Cost (AC)** - Cost for work already completed [dollars]

> $20k has been spent so far

**Cost Variance (CV)** - Are over budget or under budget? Compare what your actual costs are to the value of work completed. [calculation]

> $40k has been spent so far on a project budget of $150k. 45% has been completed. Are you over or under budget?

**Cost Performance Index (CPI)** - A ratio which tells you if you're over or under budget (Just like Cost Variance). This is just another way to find out but using a ratio. [calculation]

> _Can look at the Cost Variance example_

**Estimate at Completion (EAC)** - While a project is in progress, what's the forecasted total project cost AT THE END of a project? [calculation]  
This calculation is based on one of the following:

1. Current cost spending rate
2. Original cost spending rate

> The project budget is $10k. $8k has been spent so far. 35% of the work has been completed. What is the expected project cost if the current rate stays the same?

**Variance at Completion (VAC)** - At a given time during the project, what is the projected difference between the budgeted total project cost and the actual total cost [calcaulation]

> REDO? The project budget is $40k, the new estimated total project cost at completion is $55k. What is the VAC?

**Estimate to Completion (ETC)** - While a project is in progress, how much does it cost TO COMPLETE the project at this time? (ie - Remaining costs) [calculation]

> The project budget is $50k. $8k has been spent so far. 35% of the work has been completed. How much will it cost to finish the project if the current rate stays the same?

<br><br>

### Value Key Concepts

**Planned Value (PV)** - A dollar value derived from a percent of work that SHOULD have been completed by a specific point in the schedule [dollar value from percentage]

> At this time 75% should be completed of a $10k budget. PV is .75 x 10,000 = $7500

**Earned Value (EV)** - A dollar value derived from a percent of work ACTUALLY completed by a specific point in the schedule [dollar value from percentage]

> At this time 55% was completed from a $10k budget. EV is .55 x 10,000 = $5500

**Schedule Variance (SV)** - Difference between the work value($) earned and the work value($) that was planned [calculation]

> You planned to have a work value of $10k complete. However you have $8k of work value complete. What can you say about your schedule?

**Schedule Performance Index (SPI)** - Like Schedule Variance, this assess schedule status, but as a ratio. It looks at earned work value vs planned work value. [calculation]

> tbd

**To Complete Performance Index (TCPI)** - A ratio measuring work value that must be achieved to meet either the goal of the BAC or the new EAC (calculation)

> tbd

<br><br>

### Basic Questions Answered

1. Are you over or under budget?
2. Are you ahead of schedule or behind schedule?
3. What will the total cost of the project be?
4. How much will it cost to finish the project?

<br><br>

### Clarifying Concepts

#### BAC vs EAC

Both are TOTAL project costs for different periods of the project.  
BAC is the cost that was authorized at the beginning of the project (original budget).  
EAC can change, depending on if costs change during the project. EAC is calculated at various moments throughout the project life cycle.

> :warning: **Important:** EAC could still equal BAC

#### "Variance"

When you see the word variance, think "difference", and difference is associated to a subtraction problem.

<br><br>

### Calculations

#### Cost Calculations

| Type                         | Calculation   | Result Definitions                                         | Notes             |
| ---------------------------- | ------------- | ---------------------------------------------------------- | ----------------- |
| Budget at Completion (BAC)   | \*given       |                                                            |                   |
| Actual Cost (AC)             | \*given       |                                                            |                   |
| Cost Variance (CV)           | EV - AC       | > 0 (Under Budget)<br>= 0 (On Budget)<br>< 0 (Over Budget) |                   |
| Cost Performance Index (CPI) | EV / AC       | > 0 (Under Budget)<br>= 0 (On Budget)<br>< 0 (Over Budget) |                   |
| Estimate at Completion (EAC) | BAC / CPI     |                                                            | Current work rate |
|                              | BAC + AC - EV |                                                            | Planned work rate |
| Variance at Completion (VAC) | BAC - EAC     | > 0 (Under Budget)<br>= 0 (On Budget)<br>< 0 (Over Budget) |                   |
| Estimate to Completion (ETC) | EAC - AC      |                                                            |                   |

<br>

#### Work / Value Calculations

| Type                                 | Calculation         | Result Definitions                                                 | Notes                                       |
| ------------------------------------ | ------------------- | ------------------------------------------------------------------ | ------------------------------------------- |
| Planned Value (PV)                   | % Planned x BAC     |                                                                    |                                             |
| Earned Value (EV)                    | % Completed x BAC   |                                                                    |                                             |
| Schedule Variance (SV)               | EV - PV             | > 0 (Ahead Schedule)<br>= 0 (On Schedule)<br>< 0 (Behind Schedule) |                                             |
| Schedule Performance Index (SPI)     | EV / PV             | > 0 (Ahead Schedule)<br>= 0 (On Schedule)<br>< 0 (Behind Schedule) |                                             |
| To Complete Performance Index (TCPI) | (BAC-EV) / (BAC-AC) | > 0 (More Difficult)<br>= 0 (No change)<br>< 0 (Less Difficult)    | Rate of work needed to follow original plan |
|                                      | (BAC-EV) / (EAC-AC) | > 0 (More Difficult)<br>= 0 (No change)<br>< 0 (Less Difficult)    | Rate of work needed to follow new EAC       |
