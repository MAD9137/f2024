# Internal Instructor Notes

Notes about changes to be made in the future to the course.

## Assignment Notes

A collection of notes about changes to be made to the deliverables for next year.

### Assignment 1 
- Make Title and Description non-optional (ie they are required and thus the base init method takes these 2 parameters)
- Add makes for Event base init method!!?
- textViewOutput should be set to same name

### Midterm
- Add requirements and marks for making EventInfo view textView uneditable.
- Check if the delete cell function no longer needs a reloadData called within it.
- In the Coding prepareForSegue function I don't think we need to get a ref for the cell any more.
- Need marks for numberOf sections function... should be there.
- Marks for setting cell reuse identifier ???.
- Marks for setting up 2nd label in cell prototype.

### Assignment 3 
- Require textViews to be non-editable, non-selectable and with no highlighted text of any kind.
- Make constraints work on different sized screens.
- Rewrite the Customize your application section.
- The "Update each view’s GUI in the viewWillAppear function for that view" section should award marks that make sense.  Is this 1 mark for each button on Page A and on Page B?
- Add marks for unwrapping optionals
- add outlets and actions to the 2 Bar Buttons, and an outlet for the text-view in the 1st viewController (3pt) should be out of 5, no?  (2 actions, 3 outlets total)??
- Layout the GUI section needs marks for outlets for navItems for 3 page titles, but no more do you need to add navItems to top of viewControllers (worth 2 pts)
-- Add info about using navBar.leftBarButtonItem.title and navBar.rightBarButtonItem.title to set button text

### Final
- (DONE) Make final marks include 20 points for using a CollectionView instead of a TableView.
- Make the create request use POST and rewrite the server to use POST

## Quiz Notes

A collection of notes about changes to make to any quiz questions for next year.

## Discussion Notes

A collection of notes about changes to make to the graded discussions for next year.

## Content Notes

A collection of notes about changes to make to the curriculum for next year.
- Move lesson from Week 6 to Week 5 about Copying Files into Project.
- In Week 5 or 6 add a lesson on using a Tab Bar Controller.
- Week 10 is missing the lesson on adding constraints in code.
- *Add URLRequest example for sending with GET and POST.
- Add Optional chaining info to optional notes
- Move alertControllers earlier
- week3 Add more description&examples to Closures
- week3 Add Extension description&examples to Class lesson (as seen in Swift with Simon)
- week4 Adding second view lesson put Tip of open library icon above image??
- Make lesson on adding an icon to app, all sizes + 1024x1024 App Store icon


## Classroom Notes

Notes about changes to make to the classroom delivery of the material

## Vuepress Notes

Inside the .vuepress/config.js there is a base option. If this is set with the base url then we can use links like this:

<img :src="$withBase('/foo.png')" alt="foo">


## Dev Notes

   ╭────────────────────────────────────────────────────────────────╮
   │                                                                │
   │      New patch version of npm available! a.bb.c → x.yy.z       │
   │   Changelog: https://github.com/npm/cli/releases/tag/vx.yy.z   │
   │               Run npm install -g npm to update!                │
   │                                                                │
   ╰────────────────────────────────────────────────────────────────╯
   need to use:
   sudo npm install -g npm