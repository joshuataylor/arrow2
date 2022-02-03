initSidebarItems({"enum":[["DataType","The set of supported logical types in this crate."],["IntegerType","the set of valid indices types of a dictionary-encoded Array. Each type corresponds to a variant of [`crate::array::DictionaryArray`]."],["IntervalUnit","Interval units defined in Arrow"],["PhysicalType","The set of physical types: unique in-memory representations of an Arrow array. A physical type has a one-to-many relationship with a [`crate::datatypes::DataType`] and a one-to-one mapping to each struct in this crate that implements [`crate::array::Array`]."],["TimeUnit","The time units defined in Arrow."],["UnionMode","Mode of [`DataType::Union`]"]],"fn":[["get_extension","support get extension for metadata"]],"struct":[["Field","Represents Arrow’s metadata of a “column”."],["Schema","An ordered sequence of [`Field`]s with associated [`Metadata`]."]],"type":[["Metadata","typedef for [BTreeMap<String, String>] denoting [`Field`]’s and [`Schema`]’s metadata."],["SchemaRef","typedef for [`Arc<Schema>`]."]]});