export interface IReqBody {
  _id: any;
  _type: any;
}

import {
  PortableTextBlock,
  PortableTextMarkDefinition,
  PortableTextSpan,
} from "@portabletext/types";

// MARKS
export interface FirstMark extends PortableTextMarkDefinition {
  _type: "firstMark";
  // ...other fields
}

export interface SecondMark extends PortableTextMarkDefinition {
  _type: "secondMark";
  // ...other fields
}

export type CustomMarks = FirstMark | SecondMark;

// INLINE BLOCKS

export interface MyInlineBlock {
  _type: "myInlineBlock";
  // ...other fields
}

export type InlineBlocks = PortableTextSpan | MyInlineBlock;

// STYLES

export type TextStyles = "normal" | "h1" | "myCustomStyle";

// LISTS

export type ListStyles = "bullet" | "myCustomList";

// CUSTOM PORTABLE TEXT BLOCK

// Putting it all together by specifying generics
// all of these are valid:
// type CustomPortableTextBlock = PortableTextBlock<CustomMarks>
// type CustomPortableTextBlock = PortableTextBlock<CustomMarks, InlineBlocks>
// type CustomPortableTextBlock = PortableTextBlock<CustomMarks, InlineBlocks, TextStyles>
export type CustomPortableTextBlock = PortableTextBlock<
  CustomMarks,
  InlineBlocks,
  TextStyles,
  ListStyles
>;

// Other BLOCKS that can appear inbetween text

export interface MyCustomBlock {
  _type: "myCustomBlock";
  // ...other fields
}

// TYPE FOR PORTABLE TEXT FIELD ITEMS
export type PortableTextFieldType = CustomPortableTextBlock | MyCustomBlock;

// Using it in your document type
export interface MyDocumentType {
  portableTextField: PortableTextFieldType[];
}
