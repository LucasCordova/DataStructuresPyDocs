from __future__ import annotations
from typing import Any, Dict, Iterator, List, Set, Tuple

from datastructures.array import Array
from datastructures.linkedlist import LinkedList
from datastructures.ihashmap import IHashMap, KeyValuePair, _K, _V


class HashMap(IHashMap[_K, _V]):
    def __init__(self, starting_map: Dict = {}) -> None:
        raise NotImplementedError("__init__ method not implemented")
    
    def __getitem__(self, key: _K) -> _V:
        raise NotImplementedError("__getitem__ method not implemented")

    def __setitem__(self, key: _K, value: _V) -> None:
        raise NotImplementedError("__setitem__ method not implemented")
        
    def __eq__(self, other: object) -> bool:
        raise NotImplementedError("__eq__ method not implemented")

    def __delitem__(self, key: _K) -> None:
        raise NotImplementedError("__delitem__ method not implemented")    

    def clear(self) -> None:
        raise NotImplementedError("clear method not implemented")

    def keys(self) -> List[_K]: 
        raise NotImplementedError("keys method not implemented")

    def values(self) -> List[_V]: 
        raise NotImplementedError("values method not implemented")

    def items(self) -> List[Tuple[_K, _V]]: 
        raise NotImplementedError("items method not implemented")
    
    def __len__(self) -> int: 
        raise NotImplementedError("__len__ method not implemented")

    def __iter__(self) -> Iterator[_K]: 
        raise NotImplementedError("__iter__ method not implemented")

    def __contains__(self, key: Any) -> bool: 
        raise NotImplementedError("__contains__ method not implemented")

    def __str__(self) -> str: 
        return "{" + ", ".join([f"{key}: {value}" for key, value in self.items()]) + "}"
    
    def __repr__(self) -> str: 
        return f"HashMap({str(self)})"