# datastructures.array.Array

""" This module defines an Array class that represents a one-dimensional array. 
    See the stipulations in iarray.py for more information on the methods and their expected behavior.
    Methods that are not implemented raise a NotImplementedError until they are implemented.
"""

from __future__ import annotations
from ast import Not
from collections.abc import Sequence
import os
from typing import Any, Iterator, overload
import numpy as np
from numpy.typing import NDArray

from datastructures.iarray import IArray, T



class Array(IArray[T]):  

    def __init__(self, starting_sequence: Sequence[T], data_type: type) -> None:
        raise NotImplementedError('Array.__init__ is not implemented.')

    @overload
    def __getitem__(self, index: int) -> T: ...
    @overload
    def __getitem__(self, index: slice) -> Sequence[T]: ...
    def __getitem__(self, index: int | slice) -> T | Sequence[T]:
        raise NotImplementedError('Array.__getitem__ is not implemented.')
    
    def __setitem__(self, index: int, item: T) -> None:
        raise NotImplementedError('Array.__setitem__ is not implemented.')

    def append(self, data: T) -> None:
        raise NotImplementedError('Array.append is not implemented.')

    def append_front(self, data: T) -> None:
        raise NotImplementedError('Array.append_front is not implemented.')

    def pop(self) -> None:
        raise NotImplementedError('Array.pop is not implemented.')
    
    def pop_front(self) -> None:
        raise NotImplementedError('Array.pop_front is not implemented.')

    def __len__(self) -> int:
        raise NotImplementedError('Array.__len__ is not implemented.')

    def _resize(self, new_size: int) -> None:
        raise NotImplementedError('Array._resize is not implemented.')

    def __eq__(self, other: object) -> bool:
        raise NotImplementedError('Array.__eq__ is not implemented.')

    def __ne__(self, other: object) -> bool:
        raise NotImplementedError('Array.__ne__ is not implemented.')

    def __iter__(self) -> Iterator[T]:
        raise NotImplementedError('Array.__iter__ is not implemented.')

    def __reversed__(self) -> Iterator[T]:
        raise NotImplementedError('Array.__reversed__ is not implemented.')

    def __delitem__(self, index: int) -> None:
        raise NotImplementedError('Array.__delitem__ is not implemented.')  

    def __contains__(self, item: Any) -> bool:
        raise NotImplementedError('Array.__contains__ is not implemented.')
    
    def __does_not_contain__(self, item: Any) -> bool:
        raise NotImplementedError('Array.__does_not_contain__ is not implemented.') 

    def clear(self) -> None:
        raise NotImplementedError('Array.clear is not implemented.')

    def __str__(self) -> str:
        raise NotImplementedError('Array.__str__ is not implemented.')
    
    def __repr__(self) -> str:
        raise NotImplementedError

if __name__ == '__main__':
    filename = os.path.basename(__file__)
    print(f'This is the {filename} file.\nDid you mean to run your tests or program.py file?\nFor tests, run them from the Test Explorer on the left.')
