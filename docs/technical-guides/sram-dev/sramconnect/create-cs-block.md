# Create CMS Block

Overview - Here are some of the basic steps of how to create a CMS block in EPI

> :memo: **Note:** This more about remembering that for the cs file you'll need to create a custom GUID! This was something that I might have forgotten about before.


<br>

## Steps

<br>

#### Create CS Block
1. Create a block by creating a CS type file in the following path:
*sramconnect\SRAM.Core\Models\PublicSites\Blocks\Shared*

> :memo: **Note:** The following path places the block in the "Shared" directory but you might want to place it into a page specific folder that's in the "Blocks" directory

<br> 

Example:
```cs
namespace SRAM.Core.Models.PublicSites.Blocks
{
    [ContentType(DisplayName = "Seatpost Tool", GUID = "b4b75c4f-6630-4f93-953d-018867c92c9e", GroupName = CommonGroups.PublicContentBlocks)]
    public class SeatpostToolBlock : BaseTopLevelPublicSitesBlock
    {
        [Required]
        [CultureSpecific]
        [Display(Name = "Story Headline", Description = "Keeping copy to 1 line on common desktop sizes is preferable. 18 characters max for one line.", GroupName = SystemTabNames.Content, Order = 20)]
        public virtual string Headline { get; set; }
    }
}
```

Breakdown:


`DisplayName = "Seatpost Tool"` === This is the name of the block that you'll find on EPI when you associate a block (it's the name that you'll search for)  
<br>
`GUID` === This is where you'll need to go to the great wide web and find a GUID creator and create one for this new block

Online GUID creator example:
https://www.guidgenerator.com/

<br>

2. THERE ARE MORE STEPS BUT RIGHT NOW I'M GOING TO BE A LOSER AND NOT FILL THEM OUT HERE CAUSE I WANTED TO DOCUMENT THE PART ABOUT THE GUID