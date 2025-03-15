import { Controller, Get, Param } from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  // Thêm endpoint để lấy category theo id
  @Get('/:id')
  async getById(@Param('id') id: number) {
    const category = await this.categoryService.getOneById(id);
    return {
      message: 'get',
      data: category,
    };
  }
}
