(function() {var implementors = {};
implementors["ink_abi"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"ink_primitives/key/struct.Key.html\" title=\"struct ink_primitives::key::Key\">Key</a>&gt; for <a class=\"struct\" href=\"ink_abi/struct.LayoutKey.html\" title=\"struct ink_abi::LayoutKey\">LayoutKey</a>","synthetic":false,"types":["ink_abi::layout::LayoutKey"]},{"text":"impl&lt;F:&nbsp;<a class=\"trait\" href=\"type_metadata/form/trait.Form.html\" title=\"trait type_metadata::form::Form\">Form</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"ink_abi/struct.LayoutStruct.html\" title=\"struct ink_abi::LayoutStruct\">LayoutStruct</a>&lt;F&gt;&gt; for <a class=\"enum\" href=\"ink_abi/enum.StorageLayout.html\" title=\"enum ink_abi::StorageLayout\">StorageLayout</a>&lt;F&gt;","synthetic":false,"types":["ink_abi::layout::StorageLayout"]},{"text":"impl&lt;F:&nbsp;<a class=\"trait\" href=\"type_metadata/form/trait.Form.html\" title=\"trait type_metadata::form::Form\">Form</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"ink_abi/struct.LayoutRange.html\" title=\"struct ink_abi::LayoutRange\">LayoutRange</a>&lt;F&gt;&gt; for <a class=\"enum\" href=\"ink_abi/enum.StorageLayout.html\" title=\"enum ink_abi::StorageLayout\">StorageLayout</a>&lt;F&gt;","synthetic":false,"types":["ink_abi::layout::StorageLayout"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">; 32]</a>&gt; for <a class=\"struct\" href=\"ink_abi/struct.LayoutKey.html\" title=\"struct ink_abi::LayoutKey\">LayoutKey</a>","synthetic":false,"types":["ink_abi::layout::LayoutKey"]}];
implementors["ink_core"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">; 4]</a>&gt; for <a class=\"struct\" href=\"ink_core/env/call/struct.Selector.html\" title=\"struct ink_core::env::call::Selector\">Selector</a>","synthetic":false,"types":["ink_core::env::call::utils::Selector"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">&amp;'a [</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">]</a>&gt; for <a class=\"struct\" href=\"ink_core/env/call/struct.Selector.html\" title=\"struct ink_core::env::call::Selector\">Selector</a>","synthetic":false,"types":["ink_core::env::call::utils::Selector"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;Error&gt; for <a class=\"enum\" href=\"ink_core/env/enum.EnvError.html\" title=\"enum ink_core::env::EnvError\">EnvError</a>","synthetic":false,"types":["ink_core::env::error::EnvError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">; 32]</a>&gt; for <a class=\"struct\" href=\"ink_core/env/struct.AccountId.html\" title=\"struct ink_core::env::AccountId\">AccountId</a>","synthetic":false,"types":["ink_core::env::types::AccountId"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">; 32]</a>&gt; for <a class=\"struct\" href=\"ink_core/env/struct.Hash.html\" title=\"struct ink_core::env::Hash\">Hash</a>","synthetic":false,"types":["ink_core::env::types::Hash"]},{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">&amp;'a mut [</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.slice.html\">]</a>&gt; for <a class=\"struct\" href=\"ink_core/hash/struct.Wrap.html\" title=\"struct ink_core::hash::Wrap\">Wrap</a>&lt;'a&gt;","synthetic":false,"types":["ink_core::hash::accumulator::Wrap"]},{"text":"impl&lt;H, S&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;S&gt; for <a class=\"struct\" href=\"ink_core/hash/struct.HashBuilder.html\" title=\"struct ink_core::hash::HashBuilder\">HashBuilder</a>&lt;H, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"ink_core/hash/trait.Accumulator.html\" title=\"trait ink_core::hash::Accumulator\">Accumulator</a>,&nbsp;</span>","synthetic":false,"types":["ink_core::hash::builder::HashBuilder"]}];
implementors["ink_lang"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"ink_lang/enum.DispatchError.html\" title=\"enum ink_lang::DispatchError\">DispatchError</a>&gt; for <a class=\"struct\" href=\"ink_lang/struct.DispatchRetCode.html\" title=\"struct ink_lang::DispatchRetCode\">DispatchRetCode</a>","synthetic":false,"types":["ink_lang::error::DispatchRetCode"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"enum\" href=\"ink_lang/enum.DispatchError.html\" title=\"enum ink_lang::DispatchError\">DispatchError</a>&gt;&gt; for <a class=\"struct\" href=\"ink_lang/struct.DispatchRetCode.html\" title=\"struct ink_lang::DispatchRetCode\">DispatchRetCode</a>","synthetic":false,"types":["ink_lang::error::DispatchRetCode"]}];
implementors["type_metadata"] = [{"text":"impl&lt;F:&nbsp;<a class=\"trait\" href=\"type_metadata/form/trait.Form.html\" title=\"trait type_metadata::form::Form\">Form</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"type_metadata/struct.TypeDefUnion.html\" title=\"struct type_metadata::TypeDefUnion\">TypeDefUnion</a>&lt;F&gt;&gt; for <a class=\"enum\" href=\"type_metadata/enum.TypeDef.html\" title=\"enum type_metadata::TypeDef\">TypeDef</a>&lt;F&gt;","synthetic":false,"types":["type_metadata::type_def::TypeDef"]},{"text":"impl&lt;F:&nbsp;<a class=\"trait\" href=\"type_metadata/form/trait.Form.html\" title=\"trait type_metadata::form::Form\">Form</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"type_metadata/enum.Builtin.html\" title=\"enum type_metadata::Builtin\">Builtin</a>&gt; for <a class=\"enum\" href=\"type_metadata/enum.TypeDef.html\" title=\"enum type_metadata::TypeDef\">TypeDef</a>&lt;F&gt;","synthetic":false,"types":["type_metadata::type_def::TypeDef"]},{"text":"impl&lt;F:&nbsp;<a class=\"trait\" href=\"type_metadata/form/trait.Form.html\" title=\"trait type_metadata::form::Form\">Form</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"type_metadata/struct.TypeDefStruct.html\" title=\"struct type_metadata::TypeDefStruct\">TypeDefStruct</a>&lt;F&gt;&gt; for <a class=\"enum\" href=\"type_metadata/enum.TypeDef.html\" title=\"enum type_metadata::TypeDef\">TypeDef</a>&lt;F&gt;","synthetic":false,"types":["type_metadata::type_def::TypeDef"]},{"text":"impl&lt;F:&nbsp;<a class=\"trait\" href=\"type_metadata/form/trait.Form.html\" title=\"trait type_metadata::form::Form\">Form</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"type_metadata/struct.TypeDefEnum.html\" title=\"struct type_metadata::TypeDefEnum\">TypeDefEnum</a>&lt;F&gt;&gt; for <a class=\"enum\" href=\"type_metadata/enum.TypeDef.html\" title=\"enum type_metadata::TypeDef\">TypeDef</a>&lt;F&gt;","synthetic":false,"types":["type_metadata::type_def::TypeDef"]},{"text":"impl&lt;F:&nbsp;<a class=\"trait\" href=\"type_metadata/form/trait.Form.html\" title=\"trait type_metadata::form::Form\">Form</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"type_metadata/struct.TypeDefTupleStruct.html\" title=\"struct type_metadata::TypeDefTupleStruct\">TypeDefTupleStruct</a>&lt;F&gt;&gt; for <a class=\"enum\" href=\"type_metadata/enum.TypeDef.html\" title=\"enum type_metadata::TypeDef\">TypeDef</a>&lt;F&gt;","synthetic":false,"types":["type_metadata::type_def::TypeDef"]},{"text":"impl&lt;F:&nbsp;<a class=\"trait\" href=\"type_metadata/form/trait.Form.html\" title=\"trait type_metadata::form::Form\">Form</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"type_metadata/struct.TypeDefClikeEnum.html\" title=\"struct type_metadata::TypeDefClikeEnum\">TypeDefClikeEnum</a>&lt;F&gt;&gt; for <a class=\"enum\" href=\"type_metadata/enum.TypeDef.html\" title=\"enum type_metadata::TypeDef\">TypeDef</a>&lt;F&gt;","synthetic":false,"types":["type_metadata::type_def::TypeDef"]},{"text":"impl&lt;F:&nbsp;<a class=\"trait\" href=\"type_metadata/form/trait.Form.html\" title=\"trait type_metadata::form::Form\">Form</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"type_metadata/struct.EnumVariantTupleStruct.html\" title=\"struct type_metadata::EnumVariantTupleStruct\">EnumVariantTupleStruct</a>&lt;F&gt;&gt; for <a class=\"enum\" href=\"type_metadata/enum.EnumVariant.html\" title=\"enum type_metadata::EnumVariant\">EnumVariant</a>&lt;F&gt;","synthetic":false,"types":["type_metadata::type_def::EnumVariant"]},{"text":"impl&lt;F:&nbsp;<a class=\"trait\" href=\"type_metadata/form/trait.Form.html\" title=\"trait type_metadata::form::Form\">Form</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"type_metadata/struct.EnumVariantStruct.html\" title=\"struct type_metadata::EnumVariantStruct\">EnumVariantStruct</a>&lt;F&gt;&gt; for <a class=\"enum\" href=\"type_metadata/enum.EnumVariant.html\" title=\"enum type_metadata::EnumVariant\">EnumVariant</a>&lt;F&gt;","synthetic":false,"types":["type_metadata::type_def::EnumVariant"]},{"text":"impl&lt;F:&nbsp;<a class=\"trait\" href=\"type_metadata/form/trait.Form.html\" title=\"trait type_metadata::form::Form\">Form</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"type_metadata/struct.EnumVariantUnit.html\" title=\"struct type_metadata::EnumVariantUnit\">EnumVariantUnit</a>&lt;F&gt;&gt; for <a class=\"enum\" href=\"type_metadata/enum.EnumVariant.html\" title=\"enum type_metadata::EnumVariant\">EnumVariant</a>&lt;F&gt;","synthetic":false,"types":["type_metadata::type_def::EnumVariant"]},{"text":"impl&lt;F:&nbsp;<a class=\"trait\" href=\"type_metadata/form/trait.Form.html\" title=\"trait type_metadata::form::Form\">Form</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"type_metadata/struct.TypeIdSlice.html\" title=\"struct type_metadata::TypeIdSlice\">TypeIdSlice</a>&lt;F&gt;&gt; for <a class=\"enum\" href=\"type_metadata/enum.TypeId.html\" title=\"enum type_metadata::TypeId\">TypeId</a>&lt;F&gt;","synthetic":false,"types":["type_metadata::type_id::TypeId"]},{"text":"impl&lt;F:&nbsp;<a class=\"trait\" href=\"type_metadata/form/trait.Form.html\" title=\"trait type_metadata::form::Form\">Form</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"type_metadata/struct.TypeIdArray.html\" title=\"struct type_metadata::TypeIdArray\">TypeIdArray</a>&lt;F&gt;&gt; for <a class=\"enum\" href=\"type_metadata/enum.TypeId.html\" title=\"enum type_metadata::TypeId\">TypeId</a>&lt;F&gt;","synthetic":false,"types":["type_metadata::type_id::TypeId"]},{"text":"impl&lt;F:&nbsp;<a class=\"trait\" href=\"type_metadata/form/trait.Form.html\" title=\"trait type_metadata::form::Form\">Form</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"type_metadata/struct.TypeIdCustom.html\" title=\"struct type_metadata::TypeIdCustom\">TypeIdCustom</a>&lt;F&gt;&gt; for <a class=\"enum\" href=\"type_metadata/enum.TypeId.html\" title=\"enum type_metadata::TypeId\">TypeId</a>&lt;F&gt;","synthetic":false,"types":["type_metadata::type_id::TypeId"]},{"text":"impl&lt;F:&nbsp;<a class=\"trait\" href=\"type_metadata/form/trait.Form.html\" title=\"trait type_metadata::form::Form\">Form</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"enum\" href=\"type_metadata/enum.TypeIdPrimitive.html\" title=\"enum type_metadata::TypeIdPrimitive\">TypeIdPrimitive</a>&gt; for <a class=\"enum\" href=\"type_metadata/enum.TypeId.html\" title=\"enum type_metadata::TypeId\">TypeId</a>&lt;F&gt;","synthetic":false,"types":["type_metadata::type_id::TypeId"]},{"text":"impl&lt;F:&nbsp;<a class=\"trait\" href=\"type_metadata/form/trait.Form.html\" title=\"trait type_metadata::form::Form\">Form</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"type_metadata/struct.TypeIdTuple.html\" title=\"struct type_metadata::TypeIdTuple\">TypeIdTuple</a>&lt;F&gt;&gt; for <a class=\"enum\" href=\"type_metadata/enum.TypeId.html\" title=\"enum type_metadata::TypeId\">TypeId</a>&lt;F&gt;","synthetic":false,"types":["type_metadata::type_id::TypeId"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()