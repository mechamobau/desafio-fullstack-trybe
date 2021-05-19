import { Catch, NotFoundException, HttpException, ExceptionFilter, ArgumentsHost } from '@nestjs/common';

@Catch(NotFoundException)
export class NotFoundExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    response.status(404).json({ message: "Endpoint não encontrado" });
  }
}
