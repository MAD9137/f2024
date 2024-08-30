# MAD9137

The overall goal of this class is to establish a working knowledge of how to build iOS applications using Xcode, the Swift programming language and SwiftUI to build interfaces. It will cover the fundamentals of the software and registration required, building applications in Xcode, testing projects in the iOS simulator and deploying to a physical device. It will also give you an understanding of Apple's app approval process.

## To build the site locally

on the root of the project run `./build-dev.sh`

## To publish the site to students

on the root of the project run `./build-deploy.sh`


`./build-deploy.sh` and `./build-dev.sh` list what is going to be displayed on the website. The former deals with the public website and the latter the dev. This is specially useful when you don't want to publish all classes at once or are still working in uncompleted topics.

## To run the slides

Slides can be found at `./resources/slides/`  

On the root of the project run `./run-slide.sh week-number deck-number` to display the slides.

E.g.: `./run-slide.sh week-number 5 2` will display the second deck for the fifth week.

**To view the slides you need to install MARP**
On your mac run

`brew install marp-cli`
