import { mount } from "@vue/test-utils";
import AddUser from "../src/views/AddUser";
test("check the email binding", async () => {
  const wrapper = mount(AddUser);
  const input = wrapper.find("input[type='email']");
  await input.setValue("abc@mail.com");
  expect(input.element.value).toBe("abc@mail.com");
});
