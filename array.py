# datastructures.array.Array

""" This module defines an Array class that represents a one-dimensional array. 
    See the stipulations in iarray.py for more information on the methods and their expected behavior.
    Methods that are not implemented raise a NotImplementedError until they are implemented.
"""

from __future__ import annotations
from collections.abc import Sequence
import os
from typing import Any, Iterator, Optional, overload
import numpy as np
from numpy.typing import NDArray


from datastructures.iarray import IArray, T


class Array(IArray[T]):  

    def __init__(self, starting_sequence: Sequence[T]=[], data_type: Optional[type]=object) -> None: 
        raise NotImplementedError("__init__ method not implemented")

    @overload
    def __getitem__(self, index: int) -> T: ...
    @overload
    def __getitem__(self, index: slice) -> IArray[T]: ...
    def __getitem__(self, index: int | slice) -> T | IArray[T]:
        raise NotImplementedError("__getitem__ method not implemented")
    
    def __setitem__(self, index: int, item: T) -> None:
        raise NotImplementedError("__setitem__ method not implemented")

    def append(self, data: T) -> None:
        raise NotImplementedError("append method not implemented")

    def append_front(self, data: T) -> None:
        raise NotImplementedError("append_front method not implemented")

    def pop(self) -> None:
        raise NotImplementedError("pop method not implemented")
    
    def pop_front(self) -> None:
        raise NotImplementedError("pop_front method not implemented")

    def __len__(self) -> int: 
        raise NotImplementedError("__len__ method not implemented")

    def __eq__(self, other: object) -> bool:
        raise NotImplementedError("__eq__ method not implemented")

    def __iter__(self) -> Iterator[T]:
        raise NotImplementedError("__iter__ method not implemented")

    def __reversed__(self) -> Iterator[T]:
        for i in range(self._item_count - 1, -1, -1):
            raise NotImplementedError("__reversed__ method not implemented")

    def __delitem__(self, index: int) -> None:
        raise NotImplementedError("__delitem__ method not implemented")

    def __contains__(self, item: Any) -> bool:
        raise NotImplementedError("__contains__ method not implemented")

    def clear(self) -> None:
        raise NotImplementedError("clear method not implemented")

    def __str__(self) -> str:
        return '[' + ', '.join(str(item) for item in self) + ']'
    
    def __repr__(self) -> str:
        return f'Array {self.__str__()}, Logical: {self._item_count}, Physical: {len(self._items)}, type: {self._data_type}'
    

if __name__ == '__main__':
    filename = os.path.basename(__file__)
    print(f'This is the {filename} file.\nDid you mean to run your tests or program.py file?\nFor tests, run them from the Test Explorer on the left.')