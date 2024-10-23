---
title: "IntelliJ IDE - Productivity Tricks"
metaTitle: "IntelliJ IDE - Productivity Tricks"
metaDesc: "A summery of my favorite keyboard shortcuts and tricks to boost productivity in the intelliJ IDE"
socialImage: /images/intellij-logo.png
date: "2021-03-10"
tags:
  - IntelliJ
  - Java
  - Scala
  - Kotlin
---

# IntelliJ Tricks to boost productivity

IntelliJ is a smart IDE used to code Java/Scala/Kotlin. It uses something called Jetbrains to almost code for you. Here is my favorite summery of keyboard shortcuts which made me WAY more productive in this heavy IDE.

## **Moving the cursor**

- One word at a time:

  - `Ctrl + Cursor`

- Move cursor to beginning of line:

  - `Home`

- Move cursor to end of line:
  - `End`

## **Moving the lines**

- Move line up:

  - `Shift + Alt + Up`

- Move line down:
  - `Shift + Alt + Down`

## **Format code**

- Duplicate line:

  - `Ctrl + D`

- Delete line:

  - `Ctrl + Y`

- Parameter info:

  - `Ctrl + P`

- Comment out selected line:

  - `Ctrl + /`

- Comment out code block:

  - `Shift + Ctrl + /`

- Fold code block:
  - `Shift + Ctrl + -/+`

## **Navigate through code**

- To class:

  - `Ctrl + N`

- To file:

  - `Shift + Ctrl + N`

- To symbol:

  - `Shift + Ctrl + Alt + N`

- Go back:

  - `Shift + Ctrl + <-/->`

- Find action:

  - `Shift + Ctrl + A`

- Search everywhere
  - Searches classes/files/symbols/actions)
  - Use tab to jump to type
  - `Shift + Shift`

## **The Nr 1 Productivity killer**

### File tabs

When using intelliJ you collect file tabs of previous files you have looked through or coded in.

This makes for bad productivity since you would have to pause your work and close the tabs one by one.

Instead! Disable tabs and use the recent files function!

1. In the find action, search for "tabs placement"
2. Disable "tabs placement"
3. Then use the following shortcut to navigate your recent files:

- Recent files

  - `Ctrl + E`
  - Search in recent files by writing the filename of the file you desire to look/work on.

- Recent edited files:
  - `Shift + Ctrl + E`

## **Code selection**

- Select line

  - `Shift + Home/End`

- Select words

  - `Shift + Ctrl + <-/->`

- Select characters

  - `Shift + <-/->`

- Extending selection

  - `Ctrl + W`

- Shrinking selection
  - `Shift + Ctrl + W`

## **Code completion**

- Envoking smart code completion:

  - `Shift + Ctrl + Space`
  - Most usefull:

    - After the new keyword in an object declaration
    - In the list of parameters of a method call
    - In return statements

  - `Shift + Ctrl + Space` `Twice`
  - Invokes smart code which completes:
    - Static expressions
    - Collections, lists and arrays

* Static method completion:
  - `Ctrl + Space + Ctrl + Space`

### Postfix completion

What is postfix expressions?

- Postfix notation is used to represent algebraic expressions.

Example:

```java
public class PostFixCompletion {
    void method(Collection<String> s) {
        // Postfix expression:
        if (s == null) {
            //...
        }
    }
}
```

The `method` method takes in a colleciton of string `s`.
By writing `s.` then using the **postfix completion shortcut:** `Ctrl + J`
Will bring up a list of postfix expressions to choose.
Filter the list by writing:

- `nn` / `null` -> Checks expression to be null.
- `notnull` -> Checks expression to be not-null.
- `synchronized` -> Produces synchronization statement.
- `try` -> Inserts statement in try-catch block.
- `for` -> Iterates over enumerable collection.
- `fori` -> Iterates with index over collection
- `forr` -> Iterates with index in reverse order.

## **Code Generation**

**Getter & Setter methods**

- `Alt + Insert`

**Stub test, setUp, tearDown methods**

- `Alt + Insert`

## **Version Control tricks**

### **Commiting changes:**

- `Ctrl + K`
  - Brings up the built inn commit interface

#### Commit flow:

Inside the **commit interface**, the focus starts in the `commit message` box.

1. Write your commit message.

2. Go to your **change list**:

   - `Shift + Tab`

3. See the **differance** in a file:

   - `Ctrl + D`
   - Changes here are automatically sent to the change set.
   - Press `Esc` key to leave diff view.

4. **Revert** changes in a file:

   - `Ctrl + Alt + Z`
   - `tab` to the **revert** button
   - Press `Enter` key to confirm **revert** file.

5. **Before commit actions**:

   - Select to perform task before commit.

6. Press `Tab` button to move the focus to the **Commit** button
   - Press `Enter`

### **VC Popup Menu**

- Get a popup list of alle VC operations directly from a keyboard shortcut

  - `Alt + Back Quote`

- Each list item is accociated with a number which you can access by pressing on your keyboard.

- When selecting branch, search by typing in your search word.
  - Intellij will automatically filter the branch list as your typing.

## **Reformat:**

- `Tab` to move selection one tab stop to the right

- `Shift + Tab` to move selection one tab stop to the left

- `Ctrl + Alt + L` to reformat current selection or current file

- `Ctrl + W` to extend selection

- `Alt + 1` to move focus to the project tool window

TIP!

> Use `Ctrl + W` to expand selection, then `Ctrl + Alt + L` to reformat the code.

## **Optimaizing imports**

Imports can get messy when coding, which leads to libraries included that are not used.
This can be solved easily by using the `optimizing imports` shortcut:;

- `Ctrl + Alt + O`

### Optimize imports on the fly

When this is activated, intellij automatically changes and optimizes the imports as you code.

- `Shift + Ctrl + A` to open the **Actions** popup search field.
- Search for "_optimizing imports on the fly_" and activate it.

### Only optimize imports on commited files

- `Ctrl + K` to bring up the commit interface.
- Select `Optimize imports` in the **before commit** field.
- Select `Commit`

## **Navigate to Compilation Error**

When compiling an application in IntelliJ you will receive errors in the `event log`.
Instead of using the mouse to click the error that will send you to the errors location, simply do this:

- After a compilation error.
- Press `Esc`.
- Press `Ctrl + Alt + Down` to move to next error.
- Press `Ctrl + Alt + Up` to move back to the previous error.
- Then press `Esc` to move to the error location.

## **Bonus**

### Language injection

## **Other's**

### MultiCursor

```
ctrl + ctrl (hold last ctrl and move cursor)
```
