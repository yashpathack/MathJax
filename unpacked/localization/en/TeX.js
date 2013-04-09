MathJax.Localization.addTranslation("en","TeX",{
  isLoaded: true,
  strings: {

    ExtraOpenMissingClose:
      "Extra open brace or missing close brace",

    ExtraCloseMissingOpen:
      "Extra close brace or missing open brace",

    MissingLeftExtraRight:
      "Missing \\left or extra \\right",

    MissingScript:
      "Missing superscript or subscript argument",

    ExtraLeftMissingRight:
      "Extra \\left or missing \\right",

    Misplaced:
      "Misplaced %1",

    MissingOpenForScript:
      "Missing open brace for %1",

    AmbiguousUseOf:
      "Ambiguous use of %1",

    EnvBadEnd:
      "\\begin{%1} ended with \\end{%2}",

    EnvMissingEnd:
      "Missing \\end{%1}",

    MissingBoxFor:
      "Missing box for %1",

    MissingCloseBrace:
      "Missing close brace",

    UndefinedControlSequence:
      "Undefined control sequence %1",

    DoubleExponent:
      "Double exponent: use braces to clarify",

    DoubleSubscripts:
      "Double subscripts: use braces to clarify",

    DoubleExponentPrime:
      "Prime causes double exponent: use braces to clarify",

    CantUseHash1:
      "You can't use 'macro parameter character #' in math mode",

    MisplacedMiddle:
      "%1 must be within \\left and \\right",

    MisplacedLimits:
      "%1 is allowed only on operators",

    MisplacedMoveRoot:
      "%1 can appear only within a root",

    MultipleCommand:
      "Multiple %1",

    IntegerArg:
      "The argument to %1 must be an integer",

    NotMathMLToken:
      "%1 is not a token element",

    InvalidMathMLAttr:
      "Invalid MathML attribute: %1",

    UnknownAttrForElement:
      "%1 is not a recognized attribute for %2",

    MaxMacroSub1:
      "MathJax maximum macro substitution count exceeded; " +
      "is there a recursive macro call?",

    MaxMacroSub2:
      "MathJax maximum substitution count exceeded; " +
      "is there a recursive latex environment?",

    MissingArgFor:
      "Missing argument for %1",

    ExtraAlignTab:
      "Extra alignment tab in \\cases text",

    BracketMustBeDimension:
      "Bracket argument to %1 must be a dimension",

    InvalidEnv:
      "Invalid environment name '%1'",

    UnknownEnv:
      "Unknown environment '%1'",

    ExtraClose:
      "Extra close brace",

    ExtraCloseLooking:
      "Extra close brace while looking for %1",

    MissingCloseBracket:
      "Couldn't find closing ']' for argument to %1",

    MissingOrUnrecognizedDelim:
      "Missing or unrecognized delimiter for %1",

    MissingDimOrUnits:
      "Missing dimension or its units for %1",

    TokenNotFoundForCommand:
      "Couldn't find %1 for %2",

    MathNotTerminated:
      "Math not terminated in text box",

    IllegalMacroParam:
      "Illegal macro parameter reference",

    MaxBufferSize:
      "MathJax internal buffer size exceeded; is there a recursive macro call?",

 /* AMSmath */
 
    CommandNotAllowedInEnv:
      "%1 not allowed in %2 environment", 

    MultipleLabel:
      "Label '%1' mutiply defined",

    CommandAtTheBeginingOfLine:
      "%1 must come at the beginning of the line",

    IllegalAlign:
      "Illegal alignment specified in %1",

    BadMathStyleFor:
      "Bad math style for %1",

    PositiveIntegerArg:
      "Argument to %1 must me a positive integer",

    ErroneousNestingEq:
      "Erroneous nesting of equation structures",

    MultlineRowsOneCol:
      "multline rows must have exactly one column",

/* bbox */

    MultipleBBoxProperty:
      "%1 specified twice in %2",

    InvalidBBoxProperty:
      "'%1' doesn't look like a color, a padding dimension, or a style",

/* begingroup */

    ExtraEndMissingBegin:
      "Extra %1 or missing \\begingroup",

    GlobalNotFollowedBy:
      "%1 not followed by \\let, \\def, or \\newcommand",

/* color */

     UndefinedColorModel:
      "Color model '%1' not defined",

    rgbArg1:
      "rgb colors require 3 decimal numbers",

    InvalidDecimalNumber:
      "Invalid decimal number",

    rgbArg2:
      "rgb values must be between 0 and 1",

    RGBArg1:
      "RGB colors require 3 numbers",

    InvalidNumber:
      "Invalid number",

    RGBArg2:
      "RGB values must be between 0 and 255",

    GrayScalerArg: 
      "Grey-scale values must be between 0 and 1",

/* extpfeil */

    NewextarrowArg1:
      "First argument to %1 must be a control sequence name",

    NewextarrowArg2:
      "Second argument to %1 must be two integers separated by a comma",

    NewextarrowArg3:
      "Third argument to %1 must be a unicode character number",

/* mhchem */

    NoClosingChar:
      "Can't find closing %1",

/* newcommand */
      
    IllegalControlSequenceName:
      "Illegal control sequence name for %1",

    IllegalParamNumber:
      "Illegal number of parameters specified in %1",

    DoubleBackSlash:
      "\\ must be followed by a control sequence",

    CantUseHash2:
      "Illegal use of # in template for %1",

    SequentialParam:
      "Parameters for %1 must be numbered sequentially",

    MissingReplacementString:
      "Missing replacement string for definition of %1",

    MismatchUseDef:
      "Use of %1 doesn't match its definition",

    RunawayArgument:
      "Argument manquant pour la commande %1?"

/* verb */

    NoClosingDelim:
      "Can't find closing delimiter for %1",
 
  }
});

MathJax.Ajax.loadComplete("[MathJax]/localization/en/TeX.js");
