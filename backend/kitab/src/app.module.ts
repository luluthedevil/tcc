import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { BooksModule } from './books/books.module';
import { LibraryModule } from './library/library.module';
import { ChallengesModule } from './challenges/challenges.module';
import { ProgressModule } from './progress/progress.module';

@Module({
  imports: [UsersModule, BooksModule, LibraryModule, ChallengesModule, ProgressModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
