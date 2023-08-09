# Card

A `Card` is a container that holds information and actions related to a single concept or object, like a document or a contact.

A `Card` can give information prominence and create predictable patterns. While they're very flexible, it's important to use them consistently for particular use cases across experiences.

## **Design Spec**

[Link to Card in Figma](https://www.figma.com/file/berhUBA6mJV9sCPpjgfKRj/Card?type=design&node-id=6503-13927&mode=design&t=esnGps8mGKqly4I1-0)

<br />

## **Engineering Spec**

Fluent WC3 Card has feature parity with the Fluent UI React 9 Card implementation but not direct parity.

<br />

## Class: `Card`

<br />

### **Component Name**

`<fluent-card></fluent-card>`

<br />

### **Variables**

| Name              | Description                | Type                                                                                                  |
| ----------------- | -------------------------- | ----------------------------------------------------------------------------------------------------- |
| `cardControlSize` | Control sizes for the Card | `{ small: "small", medium: "medium", large: "large" }`                                                |
| `cardAppearance`  | Appearances for the Card   | `{ filled: "filled", filledAlternative: "filled-alternative", outline: "outline", subtle: "subtle" }` |
| `cardOrientation` | Orientations for the Card  | `{ horizontal: "horizontal", vertical: "vertical" }`                                                  |

<br />

### **Methods**

| Name | Privacy | Description | Parameters | Return | Inherited From |
| ---- | ------- | ----------- | ---------- | ------ | -------------- |

<br />

### **Events**

| Name | Type | Description | Inherited From |
| ---- | ---- | ----------- | -------------- |

<br />

### **Attributes**

| Name           | Type              | Description                      |
| -------------- | ----------------- | -------------------------------- |
| `control-size` | `cardSize`        | Sets the size of the card        |
| `appearance`   | `cardAppearance`  | Sets the appearance of the card  |
| `orientation`  | `cardOrientation` | Sets the orientation of the card |

## **Preparation**

<br />

### **Fluent Web Component v3 v.s Fluent React 9**

<br />

**Component and Slot Mapping**

| Fluent UI React 9 | Fluent Web Components 3 |
| ----------------- | ----------------------- |
| `<Card>`          | `<fluent-card>`         |
| `<CardHeader>`    |                         |
| `<CardFooter>`    |                         |

<br />

**Property Mapping**

| Fluent UI React 9 | Fluent Web Components 3 | Description of difference |
| ----------------- | ----------------------- | ------------------------- |
