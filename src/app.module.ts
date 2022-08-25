import { Module } from '@nestjs/common';
import {ConfigModule} from '@nestjs/config'
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReportsModule } from './reports/reports.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'password',
    database: 'library',
    autoLoadModels: true,
    synchronize: true
  }),ConfigModule.forRoot({ isGlobal:true,envFilePath:  `.env.${process.env.NODE_ENV.trim()}` }), ReportsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
