describe('AuthController', () => {
    describe('registerController', () => {
      it('should register a new user', async () => {
        expect.assertions(1);
        // Seu código de teste aqui
        expect(2 + 2).toBe(4); // Exemplo de expectativa
      }, 10000); // Tempo limite de 10 segundos
  
      it('should handle errors during registration', async () => {
        expect.assertions(1);
        // Seu código de teste aqui
        expect(true).toBeTruthy(); // Exemplo de expectativa
      }, 10000); // Tempo limite de 10 segundos
    });
  
    describe('loginController', () => {
      it('should authenticate a user and return a token', async () => {
        expect.assertions(1);
        // Seu código de teste aqui
        expect('hello').toBe('hello'); // Exemplo de expectativa
      }, 10000); // Tempo limite de 10 segundos
  
      it('should handle authentication errors', async () => {
        expect.assertions(1);
        // Seu código de teste aqui
        expect(false).toBeFalsy(); // Exemplo de expectativa
      }, 10000); // Tempo limite de 10 segundos
    });
  });
  