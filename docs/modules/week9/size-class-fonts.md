# Fonts for Different Size Classes

## Introduction to Font Customization for Size Classes

This lesson builds on the previous one, and examines how to control the font size and style of a Label for different Size Classes.  We will start by adding a Label in to each view, centering them within the view.  Then, center-align the text justification and set each Label's font size to 160 point as shown below.

Setting the font this large is a good idea if you plan on creating an iPad layout for your application.  In this lesson you will learn how to create fonts that are adaptive to different Size Classes, downsizing the font to fit within each view.

![Fonts for Different Size Classes](/F2020/assets/img/SizeClassFonts_01.png)

Next, add constraints to centre both of the Labels by selecting each one and clicking the **Add New Alignment Constraints** menu, found at the bottom of the editor.  For both Labels, you need to select **Horizontally in Container** and **Vertically in Container,** and then click the **Add 2 Constraints** button at the bottom of the menu.

![Fonts for Different Size Classes](/F2020/assets/img/SizeClassFonts_02.png)

You need to also set the width of each Label to the width of the view it has been placed in.  This is done by holding control and mouse-clicking from the label, and dragging it to the view it is in. Next, select **Equal Widths** in the pop-up menu.

![Fonts for Different Size Classes](/F2020/assets/img/SizeClassFonts_03.png)

You will see the labels are reduced in width to fit within the view, and the text is truncated indicated by the ellipsis (...) after the text.

![Fonts for Different Size Classes](/F2020/assets/img/SizeClassFonts_04.png)

## Adding Customization to Fonts for Size Class

To customize the font of a UI object for different Size Classes, we need to modify the font in the attribute inspector.  This process will *not* use the Vary for Traits feature, but instead uses a feature found right in the Attributes Inspector for the Label.  After selecting a Label you will find a (+) button to the left of the font parameter in the Attributes Inspector.  This is called the **Add customization** button.

![Fonts for Different Size Classes](/F2020/assets/img/SizeClassFonts_05.png)

Clicking this button opens a pop-up menu allowing the selection of different Size Class combinations you can set the font for.  In this application, we will set a font size for the current Size Class which is seen at the bottom of the editor (wC hR). We need to select "Width: Compact", and"Height: Regular" and click the "Add Variation button" at the bottom of the menu.

![Fonts for Different Size Classes](/F2020/assets/img/SizeClassFonts_06.png)

This adds an additional Font parameter in the Attributes Inspector for wC hR, and we can select a new size for the font with the current Size Class.  A size of 8- points looks good here.

![Fonts for Different Size Classes](/F2020/assets/img/SizeClassFonts_07.png)

Doing this to both Labels will make them look good for portrait mode, but when we change to landscape mode, the font is still displayed full-sized.

![Fonts for Different Size Classes](/F2020/assets/img/SizeClassFonts_08.png)

Setting up additional font variations is done the exact same way.  Click on the Label, go to the Attributes Inspector and click the Add customization button beside the font parameter again.

![Fonts for Different Size Classes](/F2020/assets/img/SizeClassFonts_09.png)

In the case of the iPhone 8,  we went from (wC hR) in portrait to (wC hC) in landscape-mode, but the iPhone 8 Plus is (wR hC) in landscape mode, so we should only check for changes in the height this layout work for all the phones in landscape-mode.  To do this set **Width: Any** and **Height: Compact**, and click the Add Variation button at the bottom of the menu.  This adds an additional font parameter, "hC", showing that this setting is for all compact height sizes.  Setting the Label's font size to 70 points looks to fit the view well.

![Fonts for Different Size Classes](/F2020/assets/img/SizeClassFonts_10.png)

This font size looks good in landscape mode, but what if we were trying to also release this app on a smaller device?  Looking at the iPhone 4s, the font is cut off a bit.

![Fonts for Different Size Classes](/F2020/assets/img/SizeClassFonts_11.png)

The label has a feature that can help auto resize the font within a range of its current font size.  Select the Label, go to the Attributes Inspector and go down to the **Autoshrink** option.  It starts set to Fixed Font Size, and you can change it to Minimum Font Scale or Size.  **Scale** lets you set a percentage of the font's current size to limit the shrinking, **Size** lets you choose a font point size to limit the shrinking.

![Fonts for Different Size Classes](/F2020/assets/img/SizeClassFonts_12.png)

Setting both Labels to use Minimum Font Scale for the Autoshrink parameter will allow for the font to display correctly on smaller devices, too.

![Fonts for Different Size Classes](/F2020/assets/img/SizeClassFonts_13.png)

Now this application's font will adapt to different Size Classes and in different orientations correctly.

The next video describes how to add font variations based on size classes:

[iOS 11 Development Essential Training - Font sizes with size classes](https://www.lynda.com/iOS-tutorials/Font-sizes-size-classes/597991/674018-4.html)
