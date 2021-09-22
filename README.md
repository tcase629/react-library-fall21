Library 

Obj Book 
Book 
title - string
author - string
cover - string

              Index (global)
                |
                App(nav routes)
      |           |       |         |
  Navbar      Home       About    library (HOC) (books) (CRUD)
                                    / \
                             Bookform  Booklist
                                       /  |   \
                                  Book   Book   Book (D)
                                  /       |       \
                           Bookform(u) Bookform(u)Bookform(u)