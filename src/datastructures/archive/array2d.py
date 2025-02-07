from __future__ import annotations
import os
from typing import Iterator, Sequence, overload

from datastructures.iarray import IArray
from datastructures.iarray2d import IArray2D
from datastructures.array import Array, T

class Array2D(IArray2D[T], Array[T]):
    def __init__(self, starting_sequence: Sequence[Sequence[T]]=[[]]) -> None:
        raise NotImplementedError('Array2D.__init__ is not implemented.')

    @staticmethod
    def empty(rows: int=0, cols: int=0, data_type: type=object) -> Array[Array[T]]: 
        raise NotImplementedError('Array2D.empty is not implemented.')

    @overload
    def __getitem__(self, index: int) -> IArray[T]: ...
    @overload
    def __getitem__(self, index: slice) -> IArray[T]: ...
    def __getitem__(self, index: int | slice) -> IArray[T] | IArray[T]: 
        raise NotImplementedError('Array2D.__getitem__ is not implemented.')
    
    def __iter__(self) -> Iterator[IArray[T]]:
        raise NotImplementedError('Array2D.__iter__ is not implemented.')
    
    def __str__(self) -> str: 
        raise NotImplementedError('Array2D.__str__ is not implemented.')
    
    def __repr__(self) -> str: 
        raise NotImplementedError('Array2D.__repr__ is not implemented.')
    
if __name__ == '__main__':
    filename = os.path.basename(__file__)
    print(f'This is the {filename} file.\nDid you mean to run your tests or program.py file?\nFor tests, run them from the Test Explorer on the left.')