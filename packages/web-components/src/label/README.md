# Label

> A label represents a caption for an item in a user interface.

<br />

## **Design Spec**

[Link to Label Design Spec in Figma](https://www.figma.com/file/jpWO2FMBefirTyThf5Rg2P/Label?node-id=2%3A476&t=QCdofuTbXkUjMS4d-0)

<br />

## **Engineering Spec**

Due to the cost of associating elements across the shadow DOM boundary the `fluent-label` will not have access to the element it is intended to reference. For this reason the `fluent-label` is for visual purposes only.

The fluent-label has several visual font size (small, medium, large) and font weight(regular, semibold) options. The fluent-label also provides appearances for required and disabled states.

### Use Case

Creating a simple label element with an optional info icon and optional required state

<br />

## Class: `Label`

<br />

### **Variables**

<br />

### **Fields**

| Name       | Privacy | Type                           | Default     | Description                          |
| ---------- | ------- | ------------------------------ | ----------- | ------------------------------------ |
| `id`       | public  | `string`                       |             | Specifies the id of label            |
| `required` | public  | `boolean`                      | `false`     | Specifies required styling for label |
| `disabled` | public  | `boolean`                      | `false`     | Sets disabled state for label        |
| `size`     | public  | `"small"` `"medium"` `"large"` | `"medium"`  | Specifies font size for label        |
| `weight`   | public  | `"regular"` `"semibold"`       | `"regular"` | Specifies font weight for label      |

<br />

### **Methods**

<br />

### **Events**

<br />

### **Attributes**

| Name       | Field    |
| ---------- | -------- |
| `required` | required |
| `disabled` | disabled |
| `size`     | size     |
| `weight`   | weight   |
| `id`       | id       |

<br />

### **Slots**

| Name | Description                            |
| ---- | -------------------------------------- |
|      | Default slotted content for label text |

<br />
<hr />
<br />

### **Suggested Template**

```ts
`<template
  id="${(attr: Label) => attr.id}"
  disabled="${(attr: Label) => attr.disabled}"
  required="${(attr: Label) => attr.required}"
  size="${(attr: Label) => attr.size}"
  weight="${(attr: Label) => attr.weight}"
>
  <slot name="start"></slot>
  <slot></slot>
  ${(attr: Label) => (attr.required ? html`<span aria-hidden="true" part="asterisk" class="asterisk">*</span>` : null)}
  <slot name="end"></slot>
</template>`;
```

## **Accessibility**

[W3 Label Spec](https://www.w3.org/WAI/tutorials/forms/labels/)

<br />

### **WAI-ARIA Roles, States, and Properties**

- No corresponding roles

<br />
<hr />
<br />

## **Preparation**

<br />

### **Fluent Web Component v3 v.s Fluent React 9**

<br />

**Component and Slot Mapping**

| Fluent UI React 9 | Fluent Web Components 3 |
| ----------------- | ----------------------- |
| `<Label>`         | `<fluent-label>`        |

<br />

**Property Mapping**
| Fluent UI React 9 | Fluent Web Components 3 | Description of difference |
|-------------------|------------------------ |---------------------------|
