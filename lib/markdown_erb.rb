module MD
  def markdown(text)
    rc = Redcarpet::Markdown.new(Redcarpet::Render::HTML)
    puts text
    rc.render(text).html_safe
  end
end
