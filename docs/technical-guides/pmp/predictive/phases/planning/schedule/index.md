# Planning | Schedule

Summary - tbd

## Plans + Documents + Tools

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
| Budget Estimate                               |
| Critical Path                                 |
| Definitive Estimate                           |
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
| Rough Order of Magnitude                      |
| Total Float                                   |
|                                               |

<br>

## Key Concepts [draft]

<br>

### Overall Project Estimates

Summary - Typically overall project schedule estimates are broken down into three different types that come into play at different project phases. Those project estimate types are:

> :warning: **Warning:** These estimates are also used for Cost Estimates!

1. Order of Magnitude (aka - Rough Order of Magnitude)
1. Budget Estimate
1. Definitive Estimate

<br><br>

#### Rough Order of Magnitude

*When is it done?*   
> At very beginning of project when just the basic project scope statement is known. No detailed requirements.

*What is the range?*  
> \-25 percent to + 75 percent

*How do you define this?*
>1. Use Top-Down estimation method to get a rough idea of how many months it will take to complete
>1. For the top range add 75% of orginal estimate 
>1. For lower range subtract 25% of original estimate 

*Example*

>Original Estimate: 6 months  
>Top Range: 6 * 0.75 == 4.5, 6 + 4.5 == 10.5 months  
>Lower Range: 6 * 0.25 == 1.5, 6 - 1.5 == 4.5 months   
> <br>
> Rough Order of Magnitude: 4.5 months <-> 10.5 months


<br><br>

#### Budget Estimate

*When is it done?*   
> When main set of features have been identified

*What is the range?*  
> \-10 percent to + 25 percent

*How do you define this?*
>1. Use Top-Down estimation method to get a total number of months of how long it will take to complete 
>1. For the top range add 25% of orginal estimate 
>1. For lower range subtract 10% of original estimate 

*Example*

>Original Estimate: 6 months  
>Top Range: 6 * 0.25 == 1.5, 6 + 1.5 == 7.5 months  
>Lower Range: 6 * 0.1- == 0.4, 6 - 0.4 == 5.4 months   
> <br>
> Budget Estimate: 5.4 months <-> 7.5 months


<br><br>

#### Definitive Estimate

*When is it done?*   
> When detailed gantt chart has been created and / or a Project Schedule Network Diagram (i.e. Details of how features will be created are hashed out)

*What is the range?*  
> \-5 percent to + 10 percent

*How do you define this?*
>1. Use Top Bottom-Up estimation method to get a total number of months it will take to complete
>1. For the top range add 10% of orginal estimate 
>1. For lower range subtract 5% of original estimate 

*Example*

>Original Estimate: 6 months  
>Top Range: 6 * 0.1- == 0.4, 6 + 0.4 == 6.4 months  
>Lower Range: 6 * 0.05- == 0.3, 6 - 0.3 == 5.7 months    
> <br>
> Definitive Estimate: 5.7 months <-> 6.4 months

<br><br>

### Dependency Types

1. Internal
2. External
3. Mandatory
4. Discretionary

<br><br>

### Critical Path

tbd

<br><br>

### Project Schedule Network Diagram

An Example: How to make Lasagna

![Image from images folder](/pmp/predictive/phases/planning/schedule/planning_schedule_project-Network-Diagram.png)

**Breakdown**

1. 3 work streams can start at once

   1. Boil Noodles
   1. Brown Meat
   1. Mix cheese filling

1. "Layer lasagna" can't start until "Drain Noodles", "Mix cheese filling", and "Add red sauce" is complete

<br><br>

## Calculations

### Estimates | 3 Point

Overview - 3 different estimate calculations that are based on the 3 variables:

- Pessimistic (P)
- Most Likely (ML)
- Optimistic (O)

| 3 Point Estimation | Calculation         |
| ------------------ | ------------------- |
| Triangular         | (P + ML + O) / 2    |
| Beta (Pert)        | (P + 4(ML) + O) / 6 |
| Standard           | (P - O ) / 6        |

<br>

### Activity Metrics

| Metric              | Calculation                                              |
| ------------------- | -------------------------------------------------------- |
| Early Start         | Preceding EF + 1                                         |
| Early Finish        | ES + Duration - 1                                        |
| Late Start          | LF - Duration + 1                                        |
| Late Finish         | Early Finish of last activity on Critical Path           |
| Total Float (Slack) | Late Finish - Early Finish OR Late Start - Early Start   |
| Free Float          | Successor /w smallest ES - Current ES - Current Duration |

<br><br>

## Random Notes

<br>

### Best Type of Estimatesn

(According to the PMP)

1. Bottom Up - You start grandular and work your way up. It's more accurate. Takes more time. More expensive.

1. Expert Judgement - Use the knowledge base of others to build an estimate

<br>
