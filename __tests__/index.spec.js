const { isBalanced } = require('../index')

describe('isBalanced with only parenthesis', () => {
  describe('only parenthesis', () => {
    it('should return true when the parenthesis are nested and are even', () => {
      const result = isBalanced('(())')
      expect(result).toBe(true)
    })

    it('should return true when the parenthesis are not nested and are even', () => {
      const result = isBalanced('()()')
      expect(result).toBe(true)
    })

    it('should return false when the parenthesis are odd', () => {
      const result = isBalanced('()(')
      expect(result).toBe(false)
    })

    it('should return false when the parenthesis are not in order', () => {
      const result = isBalanced('))((')
      expect(result).toBe(false)
    })
  })

  describe.skip('with other characters', () => {
    it('should return true if the characters are even and nested', () => {
      const result = isBalanced('([{}])')
      expect(result).toBe(true)
    })

    it('should return true if the characters are not even', () => {
      const result = isBalanced('()[]{')
      expect(result).toBe(false)
    })

    it('should return false if the characters are not in order', () => {
      const result = isBalanced('()][{}')
      expect(result).toBe(false)
    })
    
    it('should return false if the characters are even, nested and not in oder', () => {
      const result = isBalanced('({)}')
      expect(result).toBe(false)
    })
  })
})

