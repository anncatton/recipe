# require "byebug"

# def FirstFactorial(num)

#   difference = 1

#   while num > 0
#     num  (num - difference)
#     difference += 1
#   else
#     return num
#   end

# end

# num * (num - 1) * (num - 2) * (num - 3)
# num = 5
# num = num.downto(1) { |num| num * (num - 1)}
# puts num
# { |num, result| num}
# num * (num - 1)
# 4 * 3 * 2 * 1

# def letter_changes(str)
#   alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
#     "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

#   new_string = []

#   string_array = str.split("")
#   string_array.each do |ea|
#     ea.downcase!
#   end

#   array_to_modify = string_array.map do |ea|
#     if ea.nil?
#       ea
#     elsif
#       alphabet.include? ea
#       ea.next
#     else
#       ea
#     end
#   end

#   array_to_modify.each do |ea|
#     if ["a", "e", "i", "o", "u"].include? ea
#       new_string << ea.capitalize!
#     else
#       new_string << ea
#     end
#   end

#   puts new_string.join("")
#   # code goes here
#   # return str

# end

#   # code goes here
#   # return str


# letter_changes("fun times!")

# def longest_word(sen)

#   words_hash = {}
#   word_array = sen.split(" ")
#   word_array.each do |ea|
#     words_hash[ea] = ea.length
#   end

#   var1 = words_hash.max_by do |word, length|
#     length
#   end

#   puts var1[0]

# end

# longest_word("Here is my own sentence.")


def maskify(cc_number)

  cc_string = cc_number.to_s
  cc_array = cc_string.split("")

  cc_printout = []

  # cc_array.each_index do |ea|
  #   if ea > 11
  #     cc_printout << cc_array[ea]
  #   else
  #     cc_printout << "#"
  #   end
  # end

  # puts cc_printout.join("")

  if cc_array.length > 4
    cc_array.reverse!
    cc_array.each_index do |ea|
      if ea > 3
        cc_printout << cc_array[ea]
      else
        cc_printout << "#"
      end
    end
  else
    puts cc_array.join("")
  end



end

# maskify(4100460078889933)
# maskify(1244)
# maskify(41005)
# maskify(9003356)
