# Planning | Schedule

Summary - tbd

### Plans + Documents + Tools

| Plans                    |
| ------------------------ |
| Schedule Management Plan |

<br>

| Documents                        |
| -------------------------------- |
| Activities List                  |
| Project Calendar                 |
| Project Schedule Network Diagram |
| Work Breakdown Structure         |
| WBS Dictionary                   |
| tbd                              |

<br>

| Tools                                         |
| --------------------------------------------- |
| Activity - Duration                           |
| Activity - Early Start                        |
| Activity - Early Finish                       |
| Activity - Late Start                         |
| Activity - Late Finish                        |
| Critical Path                                 |
| Estimates - Analogous                         |
| Estimates - Parametric                        |
| Estimates - 3 Point                           |
| Estimates - 3 Point - Triangular Distribution |
| Estimates - 3 Point - Beta (Pert)             |
| Estimates - 3 Point - Standard                |
| Estimate - Bottom Up                          |
| Estimate - Expert Judgement                   |
| Free Float                                    |
| Leads and Lags                                |
| Presidence Diagramming Method                 |
| Total Float                                   |
|                                               |

<br>

### Best Type of Estimates

1. Bottom Up - You start grandular and work your way up. It's more accurate. Takes more time. More expensive.

1. Expert Judgement - Use the knowledge base of others to build an estimate

<br>

### Calculations

#### Estimates | 3 Point

Overview - 3 different estimate calculations that are based on the 3 variables:

- Pessimistic (P)
- Most Likely (ML)
- Optimistic (O)

| 3 Point Estimation | Calculation         |
| ------------------ | ------------------- |
| Triangular         | (P + ML + O) / 2    |
| Beta (Pert)        | (P + 4(ML) + O) / 6 |
| Standard           | (P - O ) / 6        |

#### Activity Metrics

| Metric              | Calculation                                              |
| ------------------- | -------------------------------------------------------- |
| Early Start         | Preceding EF + 1                                         |
| Early Finish        | ES + Duration - 1                                        |
| Late Start          | LF - Duration + 1                                        |
| Late Finish         | Early Finish of last activity on Critical Path           |
| Total Float (Slack) | Late Finish - Early Finish OR Late Start - Early Start   |
| Free Float          | Successor /w smallest ES - Current ES - Current Duration |

<br><br>

### Key Concepts

#### Dependency Types

1. Internal
2. External
3. Mandatory
4. Discretionary

#### Critical Path

#### Scheduling Changes - YOU NEED TO WORK ON THIS!


<br><br>

### Project Schedule Network Diagram

#### Example: How to make Lasagna

![Image from images folder](~@source/images/pmp/predictive/phases/planning/schedule/planning_schedule_project-Network-Diagram.png)

**Breakdown**

1. 3 work streams can start at once
    1. Boil Noodles
    1. Brown Meat
    1. Mix cheese filling

1. "Layer lasagna" can't start until "Drain Noodles", "Mix cheese filling", and "Add red sauce" is complete