import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateStaffdirectoryDto } from './dto/create-staffdirectory.dto';
import { UpdateStaffdirectoryDto } from './dto/update-staffdirectory.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Staffdirectory } from './entities/staffdirectory.entity';

@Injectable()
export class StaffdirectoryService {
  constructor(
    @InjectModel(Staffdirectory.name)
    private StaffdirectoryModel: Model<Staffdirectory>,
  ) {}
  create(createStaffdirectoryDto: CreateStaffdirectoryDto) {
    return 'This action adds a new staffdirectory';
  }
  async createForm(dto: CreateStaffdirectoryDto): Promise<Staffdirectory> {
    const { email } = dto;
    const requiredFields = [
      'fullName',
      'email',
      'phoneNumber',
      'whatsappNumber',
      'unit',
      'department',
    ];

    for (const field of requiredFields) {
      if (!dto[field] || String(dto[field]).trim() === '') {
        throw new BadRequestException(`${field} is required`);
      }
    }

    const existing = await this.StaffdirectoryModel.findOne({
      email,
    });
    if (existing) {
      throw new BadRequestException('Email already exists');
    }
    const textFields = [
      'interests',
      'aboutYou',
      'superPower',
      'presidentPlans',
    ];
    for (const field of textFields) {
      if (dto[field]) {
        const length = dto[field].trim().length;
        if (length < 5) {
          throw new BadRequestException(
            `${field} input field must be at least 5 characters long`,
          );
        }
        if (length > 1000) {
          throw new BadRequestException(
            `${field} must not exceed 1000 characters`,
          );
        }
      }
    }
    try {
      const createdStaff = new this.StaffdirectoryModel(dto);
      const result = createdStaff.save();
      return result;
    } catch (error) {
      throw new BadRequestException(
        'Server error while creating staff directory',
      );
    }
  }
  async findAll(): Promise<Staffdirectory[]> {
    return this.StaffdirectoryModel.find().exec();
  }

  async findOne(id: string): Promise<Staffdirectory> {
    const form = await this.StaffdirectoryModel.findById(id).exec();
    if (!form) throw new NotFoundException(`Form with ID ${id} not found`);
    return form;
  }

  async update(
    id: string,
    updateFormDto: UpdateStaffdirectoryDto,
  ): Promise<Staffdirectory> {
    const updated = await this.StaffdirectoryModel.findByIdAndUpdate(
      id,
      updateFormDto,
      { new: true },
    ).exec();
    if (!updated) throw new NotFoundException(`Form with ID ${id} not found`);
    return updated;
  }

  async remove(id: string) {
    const deleted = await this.StaffdirectoryModel.findByIdAndDelete(id).exec();
    if (!deleted) throw new NotFoundException(`Form with ID ${id} not found`);
    return {
      message: 'Form deleted successfully',
    };
  }

  async findAllData(filters: { department?: string; unit?: string }) {
    const query: any = {};
    if (filters.department) query.department = filters.department;
    if (filters.unit) query.unit = filters.unit;

    return this.StaffdirectoryModel.find(query).sort({ createdAt: -1 }).exec();
  }

  // With pagination
  async findAllPaginated(
    filters: { department?: string; unit?: string },
    page: number = 1,
    limit: number = 10,
  ) {
    const query: any = {};
    if (filters.department) query.department = filters.department;
    if (filters.unit) query.unit = filters.unit;

    const skip = (page - 1) * limit;

    const [data, total] = await Promise.all([
      this.StaffdirectoryModel.find(query)
        .sort({ createdAt: -1 })
        .skip(skip)
        .limit(limit)
        .exec(),
      this.StaffdirectoryModel.countDocuments(query),
    ]);

    return {
      data,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    };
  }
}
