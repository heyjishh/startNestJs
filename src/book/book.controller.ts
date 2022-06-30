import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { BookPipe } from './pipe/book.pipe';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post()
  //Use Custom Pipe
  create(@Body(new BookPipe()) createBookDto: CreateBookDto) {
    return this.bookService.create(createBookDto);
  }

  @Get()
  findAll() {
    return this.bookService.findAll();
  }

  @Get(':id')
    // here we learn pipes that used for validation purpose and parsing the data
  findOne(@Param('id' , ParseIntPipe) id: number) : string {
    console.log(id , typeof(id));
    return this.bookService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.bookService.update(+id, updateBookDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookService.remove(+id);
  }
}
